import React from 'react'
import { Route } from 'react-router-dom'

import CampaignsPage from '../pages/campaigns/campaigns.component'
import CampaignDetailPage from '../pages/campaign-detail/campaign-detail.component'

const CampaignRoutes = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CampaignsPage} />
    <Route path={`${match.path}/:campaignId`} component={CampaignDetailPage} />
  </div>
)

export default CampaignRoutes