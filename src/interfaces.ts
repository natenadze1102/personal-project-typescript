export type ObjNull = object | null;

interface ScenarioProps {
  readonly index: number;
  readonly meta: {
    readonly title: string;
    readonly description: string;
  };
}

interface ScenarioMethods {
  call(): Promise<string>; // First way to describe method
  restore?: () => Promise<string>; // Second way to describe method
}

export interface Scenario extends ScenarioProps, ScenarioMethods {}

export interface ClassPropsMethods {
  store: ObjNull;
  logs: Array<object>;
  dispatch(arg: Scenario[]): object;
}
