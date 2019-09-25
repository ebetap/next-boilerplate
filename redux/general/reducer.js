import * as types from './types';

const initialState = {
  loading: false,
  user: null,
};

const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}

export default generalReducer;
