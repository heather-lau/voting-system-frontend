import React from 'react'

import CampaignList from '../../components/campaign-list/campaign-list.component'
import TabBar from '../../components/tab-bar/tab-bar.component'

class CampaignsOverview extends React.Component{
  constructor() {
    super()

    this.state = {
      campaigns: [],
      status: 'Started'
    }
  }

  async componentDidMount() {
    const { api, headers } = this.props
    let url = `${api}?status=${this.state.status}`
    try {
      let resposne = await fetch(url, {
        method: 'GET',
        headers: headers
      })
      let responseJson = await resposne.json()
      let campaigns = responseJson && responseJson.payload
      this.setState({ campaigns: campaigns })
    } catch(err) {
      return (err)
    }
  }

  handleClick = async event => {
    const { api, headers } = this.props
    const status = event.target.textContent
    const url = `${api}?status=${status}`
    try {
      let resposne = await fetch(url, {
        method: 'GET',
        headers: headers
      })
      let responseJson = await resposne.json()
      let campaigns = responseJson && responseJson.payload
      this.setState({ 
        campaigns: campaigns,
        status: status
      })
    } catch(err) {
      return (err)
    }
  }

  render() {
    const { campaigns, status } = this.state
    const { tabs } = this.props
    return (
      <div>
          <TabBar tabs={tabs} currentTab={status} handleClick={this.handleClick}/>
          <CampaignList campaigns={campaigns} />
      </div>
    )
  }
}

export default CampaignsOverview