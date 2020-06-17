

/**
 * The reducer just handles CUD operations from CRUD 
 * => so just CHANGES of data
 * (=> Create, Update, Delete) 
 * 
 * @param {} state 
 * @param {*} action 
 */
const rootReducer = (state, action) => {

  console.log("Reducer received action", action);

  switch(action.type) {

    case "RECEIVED_PERSONS":
      let personsApi = action.payload
      return {...state, persons: personsApi}
    
    case "ADD_PERSON":
      let personNew = action.payload // expect: {name: XYZ, age: Z}
      personNew.id = Date.now() // 1234455
      return {...state, persons: [...state.persons, personNew]}
    
    case "UPDATE_PERSON":
      let personUpdate = action.payload
      let personsCopy = state.persons.map(person => {
        if(person.id == personUpdate.id) {
          return personUpdate
        }
        return person
      })
      return {...state, persons: personsCopy}

    case "DELETE_PERSON":
      let personId = action.payload
      let personsFiltered = state.persons.filter(person => person.id != personId)
      return {...state, persons: personsFiltered}

    case "UPDATE_AGE_FILTER":
      // action should have the age in the payload
      return {...state, ageFilter: action.payload }

    default: 
      return state
  }

}

export default rootReducer