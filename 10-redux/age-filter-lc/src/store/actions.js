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

export const fetchPerson = (name, age) => {
  return (dispatch) => {
    axios.post("/", {name, age})
    .then(res => {
      let personApi = res.data
      console.log(personApi)
      dispatch(addPerson(personApi))
    })
  }
}

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

