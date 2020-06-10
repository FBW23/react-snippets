export const addPerson = (name, age) => (
  {type: 'ADD_PERSON', payload: {name, age} }
)