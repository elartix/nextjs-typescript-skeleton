// outsource dependencies
import { fork } from 'redux-saga/effects';
import { createWrapper } from 'next-redux-wrapper';
import { reducer as formReducer } from 'redux-form';
import createSagaMiddleware, { type Task } from 'redux-saga';
import { composeWithDevTools } from '@redux-devtools/extension';
import { useSelector, type TypedUseSelectorHook } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, Store } from 'redux';
import { reducer as controllerReducer, sagas as controllerSagas, path } from 'redux-saga-controller';


// local dependencies
import { config } from './config';


export interface SagaStore extends Store {
  sagaTask: Task;
}

const composeEnhancers = composeWithDevTools({
  trace: true,
  name: `> ${config('NAME')} - ${config('VERSION')} - ${config('SID')}`,
  actionsDenylist: ['@CSD', 'SYSTEM_SCHEDULE', 'SOCKET_RECONNECT', 'ENCRYPTION_CHECK_FREE_KEYS']
});

const rootReducers = combineReducers({
  [path]: controllerReducer,
  form: formReducer
});


const createReduxStore = (): SagaStore => {
  // NOTE Build the middleware to run our Saga
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  // NOTE or controller with some thing else
  (store as SagaStore).sagaTask = sagaMiddleware.run(function * () {
    // NOTE provide to 'controller' separated saga process
    yield fork(controllerSagas);
    // NOTE whatever what you may need
    // ... another code ...
  });

  return store as SagaStore;
};

// Infer the `RootState` types from the store itself
export type AppStore = ReturnType<typeof createReduxStore>;
export type AppState = ReturnType<AppStore['getState']>;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export type NextReduxWrapper = ReturnType<typeof createWrapper>;

export const rootSelect = (state: AppState) => {
  console.log('==> root select', state);
  return state.controller;
};

export const wrapper: NextReduxWrapper = createWrapper(createReduxStore, {
  debug: true
});
