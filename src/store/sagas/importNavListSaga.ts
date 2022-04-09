import { NavItem } from './../slices/navList';
import {
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from 'redux-saga/effects';
import getNavListService from '../../services/getNavListService';
import {
  importSuccess,
  importFail,
  initiateImport,
  startImport,
} from '../slices';

// Worker function
export function* fetchList(): Generator<
  void | CallEffect<NavItem[]> | PutEffect,
  void,
  unknown & NavItem[]
> {
  try {
    yield put(startImport());
    const response = yield call(getNavListService);
    yield put(importSuccess(response));
  } catch (error) {
    yield console.log('fetchList saga error', error);
    yield put(importFail('Unknown error'));
  }
}

// Watcher function
export function* importNavListSaga() {
  yield takeLatest(initiateImport, fetchList);
}
