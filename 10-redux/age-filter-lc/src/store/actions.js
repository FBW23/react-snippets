// PERSON CRUD actions

export const receivedPersons = (persons) => (
  {type: "RECEIVED_PERSONS", payload: persons}
)

// ASYNC action need to fetch data
// once finished => it dispatches a SIMPLE action
export const fetchPersons = () => {
  return (dispatch) => {
    fetch("http://localhost:8000/persons")
    .then(res => res.json())
    .then(personsApi => {
      dispatch(receivedPersons(personsApi))
    })
  }
}


export const addPerson = (name, age) => (
  {type: 'ADD_PERSON', payload: {name, age} }
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

