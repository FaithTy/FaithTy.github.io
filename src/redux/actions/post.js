import {GET_POSTS, POSTS_ERROR} from '../type'
import axios from "axios";

export const getPosts = () => async dispatch => {
  try {
    const result = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    dispatch( {
      type: 'GET_POSTS',
      payload: result.data
    })
  } catch(e) {
    dispatch({
      type: 'POSTS_ERROR',
      payload: console.log(e)
    })
  }
}