// outsource dependencies
import { Action } from 'redux';
import { takeEvery, put, delay } from 'redux-saga/effects';
import { Controller, ActionCreators, ActionCreator, create } from 'redux-saga-controller';

import { silence } from '@/constants/saga-silence';

interface Act<Payload> extends Action {
  payload: Payload;
}

interface IInitial {
  initialized: boolean;
  disabled: boolean;
  user: { } | null;
  health: boolean;
}

interface InitializePayload {

}

interface IActions extends ActionCreators<IInitial> {
  initialize: ActionCreator<InitializePayload>;
}

// local dependencies
export const nextAppRootCtrl: Controller<IActions, IInitial> = create({
  prefix: 'next-app-root',
  actions: {
    initialize: 'INITIALIZE',
  },
  initial: {
    initialized: false,             // prevent redirect from page and show instead current page and it behavior - global preloader
    health: true,                   // prevent redirect from page and show instead current page and it behavior - maintenance page
    disabled: false,
    user: null,                     // logged user information
  },
  subscriber: function * () {
    yield takeEvery(nextAppRootCtrl.action.initialize.TYPE, silence, initializeExe);

    // connect nested sagas
    // yield fork(staticSaga);
    // yield fork(googleSaga);
  }
});

function * initializeExe ({ type, payload }: Act<InitializePayload>) {
  // NOTE initialization done
  console.log('==> appRootCtrl', type, payload);
  // NOTE emulate request
  yield delay(1e3);

  yield put(nextAppRootCtrl.action.updateCtrl({ initialized: true }));
}
