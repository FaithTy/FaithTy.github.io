import { takeLatest } from 'redux-saga/effects'
import { handleAddBook } from './handlers/book'
import { ADD_BOOK } from '../reducers/book'


export function* watcherSaga() {
  // any action to dispatch
  yield takeLatest(ADD_BOOK, handleAddBook)
}