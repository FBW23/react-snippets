import React, { useContext } from 'react';
import './App.scss';
import { BooksContext } from './store/BooksContext';
import { useState } from 'react';

// HOOKS:
// useContext
// useState
// useEffect

function App() {


  // state = { title: '', author: '' }
  let [ title, setTitle ] = useState("")
  let [ author, setAuthor ] = useState("")

  // read data from the context
  let { message, books, addBook, deleteBook } = useContext(BooksContext);

  // BOOK LIST
  let jsxBookList = books.map((book) => 
    <div key={book.title} onClick={() => deleteBook(book.id)} >{book.title}</div>
  );

  console.log('Data from context: ', message);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My heading</h1>
      </header>
      <main>
        { jsxBookList }
        <div>
          <input 
            value={title} onChange={(e) => setTitle(e.target.value)}
            type="text" placeholder="Title..." />
          <input 
            value={author} onChange={(e) => setAuthor(e.target.value)}
            type="text" placeholder="Author..." />
          <button onClick={() => addBook({id: Date.now(), title, author})}>Add</button>
        </div>
      </main>
    </div>
  );
}

export default App;
