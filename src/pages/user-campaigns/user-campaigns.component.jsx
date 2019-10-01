import React from 'react'

import CampaignList from '../../components/campaign-list/campaign-list.component'
import TabBar from '../../components/tab-bar/tab-bar.component'

import apiUrls from '../../constants/urls'
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
    const resposne = await fetch(apiUrls.USER_CAMPAIGN, {
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