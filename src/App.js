import './App.css';

import AddBook from './components/AddBook';
import BooksList from './components/BooksList';

import PostsList from './components/PostsList';

function App() {
  return (
    <div className="App">
      <BooksList />
      <PostsList />
    </div>
  );
}

export default App;
