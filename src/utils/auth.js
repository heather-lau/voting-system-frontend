import apiUrls from '../constants/urls'

export default {
  // Store tokens to localStroage
  storeTokens: (accessToken, refreshToken) => {
    window.localStorage.setItem('ACCESS_TOKEN', accessToken)
    window.localStorage.setItem('REFRESH_TOKEN', refreshToken)
  },

  // Remove tokens from localStroage
  removeTokens: () => {
    window.localStorage.removeItem('ACCESS_TOKEN')
    window.localStorage.removeItem('REFRESH_TOKEN')
  },
  
  // Get tokens from localStroage
  getTokens: () => {
    try {
      const accessToken = window.localStorage.getItem('ACCESS_TOKEN') || null
      const refreshToken = window.localStorage.getItem('REFRESH_TOKEN') || null
      return { accessToken, refreshToken }
    } catch(err) {
      return err
    }
  },

  // Check user is logged in
  checkUser: async (accessToken) => {
    try {
      const url = apiUrls.USER_ACCESS
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      let responseJson = await response.json()
      return responseJson && responseJson.payload
    } catch (err) {
      return err
    }
  }
}
