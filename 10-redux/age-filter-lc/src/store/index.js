import { createStore } from 'redux'
import rootReducer from './reducer'


// initial set of data
const initialState = {
  persons: [
    {name: "Boris", age: 35},
    {name: "Adele", age: 42},
    {name: "Steve", age: 15}
  ],
  ageFilter: 0
}

// create a store + hire store manager (=reducer) 
// + some initial warehouse products (=initial state)
let store = createStore(rootReducer, initialState)

export default store