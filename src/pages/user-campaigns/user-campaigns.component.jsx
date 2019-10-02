import React from 'react'

import CampaignsOverview from '../../components/campaigns-overview/campaigns-overview.component'

import API from '../../constants/api'
import Auth from '../../utils/auth'


const UserCampaignsPage = () => {
  const tokens = Auth.getTokens()
  const { accessToken } = tokens
  return (
    <div>
      <h1>Campaigns</h1>
      <CampaignsOverview
        api={API.userCampaigns}
        tabs={['Started', 'Pending', 'Ended']}
        headers={{Authorization: `Bearer ${accessToken}`}}
      />
    </div>
  )
}

export default UserCampaignsPage
