import { ObjNull } from './interfaces';
import { ClassPropsMethods, Scenario } from './interfaces';
import { validate } from './helperFunctions';

export class Transaction implements ClassPropsMethods {
  store: ObjNull = {};
  readonly logs: object[] = [];
  async dispatch<T extends Scenario>(scenario: T[]) {
    //sort scenario
    scenario = scenario.sort((first, second) => first.index - second.index);
    for (let current of scenario) {
      validate(current);

      try {
        this.logs.push({
          index: current.index,
          meta: current.meta,
          storeBefore: current,
          storeAfter: await current.call(),
          error: null,
        });

        this.store = null;
      } catch (e: any) {
        this.logs.push({
          index: current.index,
          meta: current.meta,
          storeBefore: current,
          error: { name: e.name, message: e.message, stack: e.stack },
        });

        if (current.restore) {
          try {
            this.logs.push({
              index: current.index,
              meta: current.meta,
              storeBefore: current,
              storeAfter: await current.restore(),
            });
          } catch (e: any) {
            this.store = {};

            this.logs.push({
              index: current.index,
              meta: current.meta,
              error: { name: e.name, message: e.message, stack: e.stack },
            });

            for (let i = current.index - 2; i >= 0; i--) {
              if (!scenario[i].restore)
                throw new Error(
                  `Cannot restore because there is no restore ! on index ${scenario[i].index}`
                );

              try {
                await scenario[i].restore?.();
                this.logs.push({
                  index: scenario[i].index,
                  meta: scenario[i].meta,
                  error: null,
                });
              } catch (e: any) {
                this.logs.push({
                  index: scenario[i].index,
                  meta: scenario[i].meta,
                  error: { name: e.name, message: e.message, stack: e.stack },
                });
              }
            }
            break;
          }
        }
      }
    }
    return this.logs;
  }
}
