const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    case 'RESET_CURRENT_USER':
      return INITIAL_STATE
    default:
    return state
  }
}

export default userReducer