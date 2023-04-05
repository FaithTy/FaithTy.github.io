import {GET_POSTS, POSTS_ERROR} from '../type'


const INITIAL_STATE = {
  posts: [],
  loading: true
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false
      }
    default: return state
  }
}