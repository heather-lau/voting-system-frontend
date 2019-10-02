import React from 'react'

import CampaignsOverview from '../../components/campaigns-overview/campaigns-overview.component'

import API from '../../constants/api'

const CampaignsPage = () => (
  <div>
    <h1>Campaigns</h1>
    <CampaignsOverview
      api={API.campaigns}
      tabs={['Started', 'Ended']}
    />
  </div>
)

export default CampaignsPage
