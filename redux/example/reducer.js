import * as types from './types';

const initialState = {
  number: 0,
};

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_NUMBER:
      return {
        ...state,
        number: state.number + action.payload,
      };
    case types.DECREMENT_NUMBER:
      return {
        ...state,
        number: state.number + action.payload,
      };
    default:
      return state;
  }
}

export default exampleReducer;
