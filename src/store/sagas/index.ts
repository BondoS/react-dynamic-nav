import { all } from 'redux-saga/effects';
import {
  fetchList as fetchNavListOnFirstLoadOnly,
  importNavListSaga,
} from './importNavListSaga';
export * from './importNavListSaga';

export default function* rootSaga() {
  yield all([importNavListSaga(), fetchNavListOnFirstLoadOnly()]);
}
