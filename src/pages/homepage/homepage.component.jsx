import React from 'react'
import { Route } from 'react-router-dom';

import CampaignOverviewPage from '../campaign-overview/campaign-overview.component'
import CampaignDetailPage from '../campaign-detail/campaign-detail.component'

const HomePage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CampaignOverviewPage} />
    <Route path={`${match.path}/:campaignId`} component={CampaignDetailPage} />
  </div>
)

export default HomePage