import React from 'react'

import CampaignList from '../../components/campaign-list/campaign-list.component'
import TabBar from '../../components/tab-bar/tab-bar.component'

import CONFIG from '../../config/config'
import apiPaths from '../../constants/paths'
import Auth from '../../utils/auth'

class UserCampaignsPage extends React.Component{
  constructor() {
    super()

    this.state = {
      campaigns: []
    }
  }

  async componentDidMount() {
    const tokens = Auth.getTokens()
    const { accessToken } = tokens
    const url = `${CONFIG.api_host}${apiPaths.USER_CAMPAIGN}`
    const resposne = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
    })
    const responseJson = await resposne.json()
    const campaigns = responseJson && responseJson.payload
    this.setState({ campaigns: campaigns })
  }
  render() {
    const { campaigns } = this.state
    return (
      <div>
          <h1>Your Campaigns</h1>
          <TabBar/>
          <CampaignList campaigns={campaigns}/>
      </div>
    )
  }
}
  

export default UserCampaignsPage