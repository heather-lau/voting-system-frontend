import React from 'react'

import CampaignList from '../../components/campaign-list/campaign-list.component'
import TabBar from '../../components/tab-bar/tab-bar.component'

import apiUrls from '../../constants/urls'

class CampaignOverviewPage extends React.Component{
  constructor() {
    super()

    this.state = {
      campaigns: []
    }
  }

  async componentDidMount() {
    const resposne = await fetch(apiUrls.CAMPAIGN)
    const responseJson = await resposne.json()
    const campaigns = responseJson && responseJson.payload
    this.setState({ campaigns: campaigns })
  }
  render() {
    const { campaigns } = this.state
    return (
      <div>
          <h1>Campaigns</h1>
          <TabBar/>
          <CampaignList campaigns={campaigns}/>
      </div>
    )
  }
}

export default CampaignOverviewPage