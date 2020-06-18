import React, { useContext } from 'react';
import './App.scss';
import { BooksContext } from './store/BooksContext';
import { useState } from 'react';

// HOOKS:
// useContext
// useState
// useEffect

function App() {

  // read data from the context
  let { message, books, addBook, updateBook, deleteBook } = useContext(BooksContext);

  let jsxBookList = books.map((book) => 
    <div key={book.title}>{book.title}</div>
  );

  console.log('Data from context: ', message);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My heading</h1>
      </header>
      <main>
        { jsxBookList }
        <button onClick={addBook}>Add</button>
      </main>
    </div>
  );
}

export default App;
