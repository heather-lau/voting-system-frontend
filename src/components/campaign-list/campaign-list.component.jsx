import React from 'react'

import CampaignItem from '../campaign-item/campaign-item.component'


const CampaignList = ({campaigns}) => (
  <div>
    {campaigns.map(campaign => (
      <CampaignItem key={campaign._id} campaign={campaign}/>
    ))}
  </div>
)

export default CampaignList