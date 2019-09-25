import * as types from './types';

export const setLoading = (value) => ({
  type: types.INCREMENT_NUMBER,
  payload: value,
});
