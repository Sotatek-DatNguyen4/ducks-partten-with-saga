import * as types from './types';

const counter = (
  state = 0, 
  action
) => {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;
    case types.INCREMENT_IF_ODD:
      return (state % 2 !== 0) ? state + 1 : state;
    case types.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;