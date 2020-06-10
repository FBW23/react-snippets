const rootReducer = (state, action) => {

  console.log("Reducer received action", action);

  switch(action.type) {
    case "ADD_PERSON":
      let personNew = action.payload // expect: {name: XYZ, age: Z}
      personNew.id = Date.now() // 1234455
      return {...state, persons: [...state.persons, personNew]}
    default: 
      return state
  }

  return state

}

export default rootReducer