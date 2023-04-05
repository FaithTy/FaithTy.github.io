import React, { useState } from 'react'

import { makeStyles } from '@mui/styles';

import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Typography, Box, TextField} from '@mui/material';
import FormControl from '@mui/material/FormControl'
import CloseIcon from '@mui/icons-material/Close'

const useStyles = makeStyles({
  root: {
    // width: '350px',
    backgroundColor: 'white'
  },
});

const AddBook = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [book, setBook] = useState({
    name: '',
    author: '',
    year: '',
    genre: '',
    description: ''
  })

  const handleOpenModal = (bool) => {
    setOpenModal(bool)
  }

  const handleCloseModal = (bool) => {
    setOpenModal(bool)
  }

  const handleOnChange = (e, type) => {
    const { id, value } = e.target
    e.preventDefault();
    setBook({
      ...book,
      [id]: value
    })
  }

  const handleSaveBook = (data) => {
    console.log(data)
  }

  return (
    <>
      <Button variant='contained' onClick={() => handleOpenModal(true)}>Add Book</Button>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth='lg'
      >
       <Box className={classes.root}>
          <DialogTitle>Add Book
            <CloseIcon onClick={() => handleCloseModal(false)}/>

          </DialogTitle>
          <DialogContent>
            <FormControl>
              <div>
                <Typography variant='body2'>Name:</Typography>
                <TextField
                  id='name'
                  type='text'
                  variant='outlined'
                  value={book.name}
                  onChange={(e) => handleOnChange(e)}
                >
                </TextField>
              </div>
              <div>
                <Typography variant='body2'>Author:</Typography>
                <TextField
                  id='author'
                  type='text'
                  variant='outlined'
                  name='author'
                  value={book.author}
                  onChange={(e) => handleOnChange(e)}
                >
                </TextField>
              </div>
              <div>
                <Typography variant='body2'>Year:</Typography>
                <TextField 
                  id='year'
                  type='number'
                  variant='outlined'
                  name='year'
                  value={book.year}
                  onChange={(e) => handleOnChange(e)}></TextField>
              </div>
              <div>
                <Typography variant='body2'>Genre:</Typography>
                <TextField 
                  id='genre'
                  type='text'
                  variant='outlined'
                  name='genre'
                  value={book.genre}
                  onChange={(e) => handleOnChange(e)}></TextField>
              </div>
              <div>
                <Typography variant='body2'>Description:</Typography>
                <TextField 
                  id='description'
                  type='text'
                  variant='outlined'
                  name='description'
                  value={book.description}
                  onChange={(e) => handleOnChange(e)}
                ></TextField>
              </div>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button 
              type='submit'
              variant='contained'
              onClick={() => handleSaveBook(book)}>Save</Button>
            <Button variat='outlined'>Cancel</Button>
          </DialogActions>
        </Box> 
      </Dialog>
  </>
  )
}

export default AddBook;