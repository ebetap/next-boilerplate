import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import generalReducer from './general/reducer';
import exampleReducer from './example/reducer';

const rootReducer = combineReducers({
  general: generalReducer,
  example: exampleReducer,
});

const makeStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
  );

  return store;
}

export default makeStore;
