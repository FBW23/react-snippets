import React, { createContext, useState } from 'react';

// CONTEXT => Redux Store
// PROVIDER = Redux Provider

// HOC = Higher Order Component
// <Router><App /></Router>
// <Provider store={store}><App /></Provider>

export const BooksContext = createContext() // just like Redux createStore

const BooksProvider = (props) => {

  console.log("Props:", props.children)

  const [ books, setBooks ] = useState([
    { title: 'Book 1', author: 'Rob', image: "https://randomuser.me/api/portraits/men/32.jpg" },
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
      {/* props.children = <App /> */}
      { props.children }
    </BooksContext.Provider>
  )
}

export default BooksProvider