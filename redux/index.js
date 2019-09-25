import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import generalReducer from './general/reducer';
import exampleReducer from './example/reducer';

const rootReducer = combineReducers({
  general: generalReducer,
  example: exampleReducer,
});

const makeStore = (initialState) => {
  let store;

  const isClient = typeof window !== 'undefined';

  if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
      key: 'root',
      storage,
      whitelist: ['example'],
    };

    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      composeWithDevTools(
        applyMiddleware(thunk),
      ),
    );

    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(thunk)
      ),
    );
  }

  return store;
};

export default makeStore;
