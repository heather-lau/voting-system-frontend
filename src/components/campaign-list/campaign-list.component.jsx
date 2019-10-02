import React from 'react'
import { withRouter } from 'react-router-dom'

import CampaignItem from '../campaign-item/campaign-item.component'

const CampaignList = ({ campaigns, history, match }) => (
  <div>
    {campaigns.map(campaign => (
      <CampaignItem 
        key={campaign._id} 
        campaign={campaign}
        handleClick={() => history.push(`${match.url}/${campaign._id}`)}
      />
    ))}
  </div>
)

export default withRouter(CampaignList)