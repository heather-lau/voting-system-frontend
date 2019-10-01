export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
})

export const resetCurrentUser = () => ({
  type: 'RESET_CURRENT_USER'
})