import { put, takeLatest, call, all, select, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

import {
  Requested
} from '../actions'

console.log('getBookList')


// function *GetBookList({ payload }) {
//   const config = {
//     method: 'get',
//     url: 'https://jsonplaceholder.typicode.com/users'
//   }
//   const result = yield call(axios, config, 'BOOK_LIST')

//   console.log('result', result)
//   if (result.payload.success) {
//     let newData = result.payload.data

//     yield put({
//       type: 'BOOK_LIST',
//       payload: {
//         data: newData
//       }
//     })
//   }

//   yield put(result)
//   yield put(Requested('gettingBookList'))

// }

function *GetBookList() {
  let data =  yield fetch('https://jsonplaceholder.typicode.com/users');
  data =  yield data.json();
  console.log('data', data)
}




export default function *() {
  yield takeEvery('BOOK_LIST_REQUESTED', GetBookList)
}