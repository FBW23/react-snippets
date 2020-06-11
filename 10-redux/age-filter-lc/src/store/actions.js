export const addPerson = (name, age) => (
  {type: 'ADD_PERSON', payload: {name, age} }
)

export const updateAgeFilter = (age) => (
  {type: "UPDATE_AGE_FILTER", payload: age}
)

export const updatePerson = (person) => (
  {type: "UPDATE_PERSON", payload: person}
)

export const deletePerson = (id) => (
  {type: "DELETE_PERSON", payload: id}
)
