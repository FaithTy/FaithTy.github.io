import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from '@redux-saga/core';
import booksReducer from './reducers/book'
import { watcherSaga } from './sagas/rootSaga';

const reducer = combineReducers({
  book: booksReducer
})

const sagaMiddleWare = createSagaMiddleware()

const middleWare = [sagaMiddleWare]

const store = createStore(reducer, {}, applyMiddleware(...middleWare));

sagaMiddleWare.run(watcherSaga)

export default store;