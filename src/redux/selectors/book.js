import { createSelector } from 'reselect'


export default createSelector(
  state => state.book,
  (book) => {
    return {
      book: {
        ...book
      }
    }
  }
)