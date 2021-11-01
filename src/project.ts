import { Scenario } from './interfaces';
import { Transaction } from './classes';

const scenario: Scenario[] = [
  {
    index: 1,
    meta: {
      title: 'Read popular customers',
      description:
        'This action is responsible for readin_g the most popular customers',
    }, // callback for main execution
    call: async () => {
      return `Success called the 1-th step`;
    },
    restore: async () => {
      return 'Success restored the 1-st step';
      // throw new Error('estoring error on first step');
    }, // callback for rollback
  },
  {
    index: 2,
    meta: {
      title: 'Delete customer',
      description: 'This action is responsible for deleting customer',
    }, // callback for main execution
    call: async () => {
      return 'Success called the second step';
    },
    restore: async () => {
      return 'Success restored the 2-nd step';
    }, // callback for rollback
  },
  {
    index: 3,
    meta: {
      title: 'Delete customer',
      description: 'This action is responsible for deleting customer',
    }, // callback for main execution
    call: async () => {
      return `Success called the 3-th step`;
    },
    restore: async () => {
      return `The 3-th step restored successfully`;
    },
  },
  {
    index: 5,
    meta: {
      title: 'Delete customer',
      description: 'This action is responsible for deleting customer',
    }, // callback for main execution
    call: async () => {
      throw new Error('Error on the fifth step');
    },
    restore: async () => {
      return `The 5-th step restored successfully`;
    },
  },
  {
    index: 4,
    meta: {
      title: 'Delete customer',
      description: 'This action is responsible for deleting customer',
    }, // callback for main execution
    call: async () => {
      throw new Error(`Error on the fourth step`); // return 'Success on the fourth step';
    },
    restore: async () => {
      throw new Error(`Restore error the 4th step`);
      return `The 4th step restored successfully`;
    },
  },
];

const transaction = new Transaction();

(async () => {
  try {
    await transaction.dispatch(scenario);
    const store = transaction.store; // {} | null
    const logs = transaction.logs; // []
    console.log(logs);
    console.log(store);
  } catch (err: any) {
    console.log({ name: err.name, message: err.message, stack: err.stack });
  }
})();

// გაქვს თუ არა ფროფერთი
// undefined? null?
// index => number??
// meta => object??
// meta.title => string??
// meta.description => string??
// call => function??
