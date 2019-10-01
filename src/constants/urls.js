import CONFIG from '../config/config'

const apiUrls = {
  SIGN_UP: `${CONFIG.api_host}signup`,
  SIGN_IN: `${CONFIG.api_host}signin`,
  USER_ACCESS: `${CONFIG.api_host}access`,

  CAMPAIGN: `${CONFIG.api_host}campaign`,
  USER_CAMPAIGN: `${CONFIG.api_host}campaign/user`
}

export default apiUrls
