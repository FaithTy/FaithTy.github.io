import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPosts
} from '../../redux/actions'

const PostsList = () => {
  const dispatch = useDispatch()

  const data = useSelector(state => state.posts)
  console.log(data, 'data')

  useEffect (() => {
    dispatch(getPosts())
  }, [])


  return (
    <>
    <h1>POST LIST</h1>
      {
        data.posts.map(post => (
          <>
            {post.userId}
          </>
        ))
      }
    </>
  )
}

export default PostsList