const rootReducer = (state, action) => {

  console.log("Reducer received action", action);

  switch(action.type) {
    
    case "ADD_PERSON":
      let personNew = action.payload // expect: {name: XYZ, age: Z}
      personNew.id = Date.now() // 1234455
      return {...state, persons: [...state.persons, personNew]}
    
    case "UPDATE_AGE_FILTER":
      // action should have the age in the payload
      return {...state, ageFilter: action.payload }

    default: 
      return state
  }

}

export default rootReducer