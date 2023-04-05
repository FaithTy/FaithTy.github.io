// export function GetBookList(payload) {
//   return {
//     type: 'BOOK_LIST_REQUESTED',
//     payload
//   }
// }
import {GET_BOOKS, BOOKS_ERROR} from '../type'
import axios from "axios";

export const getBooks = () => async dispatch => {
  try {
    const result = await axios.get(`http://jsonplaceholder.typicode.com/users`)
    dispatch( {
      type: 'GET_BOOKS',
      payload: result.data
    })
  } catch(e) {
    dispatch({
      type: 'BOOKS_ERROR',
      payload: console.log(e)
    })
  }
}