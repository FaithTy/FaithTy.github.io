import React, { useEffect, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import setBook from '../../redux/reducers/book'


import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem';
import ListItemButton  from '@mui/material/ListItemButton';

import AddBook from '../AddBook';


// Actions //

import {
  getBooks
} from '../../redux/actions'

const BooksList = (props) => {
  console.log(getBooks, props,'getBooks here')
  const dispatch = useDispatch()

  // const { books } = props.books
  const data  = useSelector(state => state.books)

  // const {
	// 	book: { list: { data }},
  //   common: { gettingBookList }
	// } = useSelector(({ book, common }) => ({ book, common }))

  const DUMMY_BOOKS = [
    {
      id: 1,
      name: 'Game of Thrones',
      author: 'Me',
      year: 2012,
      genre: 'Thriller',
      description: 'blah blah'
    }
  ]

  useEffect (() => {
    dispatch(getBooks())
  }, [])

  return (
    <>
      <Typography variant='h1'>Books List</Typography>
      <AddBook />
      {/* {gettingBookList ? <Typography variant='h1'>hello</Typography> 
      :
      <Typography variant='h2'>hi</Typography>
      } */}
      {
        data.books.map(book => (
          <List key={book.id}>
            <ListItem>
              <Typography variant='body2'>{book.name}</Typography>
              <Typography variant='body2'>{book.author}</Typography>
              <Typography variant='body2'>{book.year}</Typography>
              <Typography variant='body2'>{book.genre}</Typography>
              <Typography variant='body2'>{book.description}</Typography>
            </ListItem>
          </List>
        )
        )
      }
    </>
  )
}

export default BooksList;