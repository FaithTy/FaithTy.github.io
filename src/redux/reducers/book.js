// import {GET_BOOKS } from '../types'
import {GET_BOOKS, BOOKS_ERROR} from '../type'


const INITIAL_STATE = {
  books: [],
  loading: true
}

// const actionHandlers = {
//   BOOK_LIST: (state, action) => {
//     console.log(state, action, 'actionHandler')
//     return {
//       ...state,
//     list: action.payload
//     }
//   }
// }

// export default (state = INITIAL_STATE, action) => {
//   if (actionHandlers.hasOwnProperty(action.type)) {
//     return actionHandlers[action.type](state, action)
//   }
//   return state
// }

export default function(state = INITIAL_STATE, action) {
  console.log(action.payload, 'paylod')
  switch(action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
        loading: false
      }
    default: return state
  }
}