import * as types from './types';

export const incrementNumber = (value) => {
  return async (dispatch) => {
    dispatch({
      type: types.INCREMENT_NUMBER,
      payload: value,
    });
  };
};

export const decrementNumber = (value) => {
  return async (dispatch) => {
    dispatch({
      type: types.DECREMENT_NUMBER,
      payload: value,
    });
  };
};
