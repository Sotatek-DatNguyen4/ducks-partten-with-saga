import * as types from './types';

export const incrementCounter = () => {
  return {
    type: types.INCREMENT
  }
};

export const decrementCounter = () => {
  return {
    type: types.DECREMENT
  }
};

export const incrementCounterAsync = () => {
  return {
    type: types.INCREMENT_ASYNC
  }
};

