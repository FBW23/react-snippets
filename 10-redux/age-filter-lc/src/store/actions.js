export const addPerson = (name, age) => (
  {type: 'ADD_PERSON', payload: {name, age} }
)

export const updateAgeFilter = (age) => (
  {type: "UPDATE_AGE_FILTER", payload: age}
)
