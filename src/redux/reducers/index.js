// import book from './book'
// import common from './common'


// export default {
//   book,
//   common
// }

import { combineReducers } from "redux";
import bookReducer from './book'
import postReducer from './post'

export default combineReducers({
  books: bookReducer,
  posts: postReducer
})