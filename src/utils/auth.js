import apiPaths from '../constants/paths'
import CONFIG from '../config/config'

export default {
  // POST login form
  login: async (email, password) => {
    try {
      const url = `${CONFIG.api_host}${apiPaths.SIGN_IN}`
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email,password}),
      })
      let responseJson = await response.json()
      return responseJson && responseJson.payload
    } catch (err) {
      return err
    }
  },

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
      const url = `${CONFIG.api_host}${apiPaths.USER_ACCESS}`
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
      })
      let responseJson = await response.json()
      return responseJson && responseJson.payload
    } catch (err) {
      return err
    }
  }
}
