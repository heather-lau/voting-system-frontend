import React from 'react'
import { Route } from 'react-router-dom'

import UserCampaignsPage from '../pages/user-campaigns/user-campaigns.component'
import EditCampaignPage from '../pages/edit-campaign/edit-campaign.componet'

const UserCampaignsRoutes = ({ match }) => (
  <div>
    <Route exact path={match.path} component={UserCampaignsPage} />
    <Route path={`${match.path}/:campaignId`} component={EditCampaignPage} />
  </div>
)

export default UserCampaignsRoutes