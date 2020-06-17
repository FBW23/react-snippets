import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'

// initial set of data
const initialState = {
  persons: [],
  ageFilter: 0
}

// create a store + hire store manager (=reducer) 
// + some initial warehouse products (=initial state)
let store = createStore(rootReducer, initialState, applyMiddleware(thunk))

export default store