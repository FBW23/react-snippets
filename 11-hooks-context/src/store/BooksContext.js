import React, { createContext, useState, useEffect } from 'react';

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

  const [books, setBooks] = useState([])

  // => componentDidMount, componentDidUpdate, componentWillUnmount
  useEffect(() => {
    fetch("http://localhost:8000/books")
    .then(res => res.json())
    .then(booksApi => {
      console.log("Books API:", booksApi)
      setBooks(booksApi)
    })
  }, [])

  // const [ books, setBooks ] = useState([
  //   { id: 1, title: 'Book 1', author: 'Rob' },
  //   { id: 2, title: 'Book 2', author: 'Rob' },
  //   { id: 3, title: 'Book 3', author: 'Rob' }
  // ]);

  const addBook = (bookNew) => {
    console.log(bookNew)
    setBooks([...books, bookNew ])
  }

  const deleteBook = (id) => {
    let booksNew = books.filter(book => book.id != id)
    setBooks(booksNew)
  }

  const updateBook = () => {}

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