// PERSON CRUD actions
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000/persons"

export const receivedPersons = (persons) => (
  {type: "RECEIVED_PERSONS", payload: persons}
)

// ASYNC action is needed to fetch data
// once finished => it dispatches a SIMPLE action
export const fetchPersons = () => {
  return (dispatch) => {
    axios.get("/")
    .then(res => {
      let personsApi = res.data
      // dispatch now an "ordinary" action at the end
      // to forward our received data to the reducer
      dispatch(receivedPersons(personsApi))
    })    
  }
}

// UPDATING AN ITEM
// axios.patch(`/${id}`, { age: 37 })

// DELETING AN ITEM
// axios.delete(`/${id}`)

export const postPerson = (name, age) => {
  return (dispatch) => {
    // with axios you can send an object directly
    axios.post("/", {name, age})
    .then(res => {
      let personApi = res.data
      console.log(personApi)
      // call simple action at the end to store the data from the API
      dispatch(addPerson(personApi))
    })
  }
}

// normal action - put received data into redux store
export const addPerson = (person) => (
  {type: 'ADD_PERSON', payload: person }
)

export const updatePerson = (person) => (
  {type: "UPDATE_PERSON", payload: person}
)

export const deletePerson = (id) => (
  {type: "DELETE_PERSON", payload: id}
)

// FILTER update action
export const updateAgeFilter = (age) => (
  {type: "UPDATE_AGE_FILTER", payload: age}
)

