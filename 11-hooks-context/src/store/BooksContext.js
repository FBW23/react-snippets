import React, { createContext, useState } from 'react';

// CONTEXT => like Redux Store
// PROVIDER => like Redux Provider

// HOC = Higher Order Component
// => HOC components WRAP other components to provide them 
//    with some functionality or data

// Classical Examples: React-Router & Redux Provider
// <Router><App /></Router>
// <Provider store={store}><App /></Provider>

export const BooksContext = createContext() // just like Redux createStore

const BooksProvider = (props) => {

  console.log("Props:", props.children)

  const [ books, setBooks ] = useState([
    { title: 'Book 1', author: 'Rob' },
    { title: 'Book 2', author: 'Rob' },
    { title: 'Book 3', author: 'Rob' }
  ]);

  const addBook = () => {
    let bookNew = { title: "New", author: "New"}
    setBooks([...books, bookNew ])
  }

  const updateBook = () => {}
  const deleteBook = () => {}

  let sharedData = { 
    message: "Hello world",
    books,
    addBook,
    updateBook,
    deleteBook
  }

  return (
    <BooksContext.Provider value={sharedData}>
      {/* props.children => our <App /> component will be inside there */}
      { props.children }
    </BooksContext.Provider>
  )
}

export default BooksProvider