import CONFIG from '../config/config'

export default {
  signUp: `${CONFIG.api_host}/signup`,
  signIn: `${CONFIG.api_host}/signin`,
  userAccess: `${CONFIG.api_host}/access`,

  campaigns: `${CONFIG.api_host}/campaigns`,
  userCampaigns: `${CONFIG.api_host}/user/campaigns`
}
