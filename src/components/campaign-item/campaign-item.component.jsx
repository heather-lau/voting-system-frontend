import React from 'react'

import { CampaignItemContainer, DataRange } from './campaign-item.styles'

const CampaignItem = ({ campaign }) => (
    <CampaignItemContainer>
        <h2>{campaign.title}</h2>
        <DataRange>from {campaign.starts} to {campaign.ends}</DataRange>
        <p>by {campaign.hostBy}</p>
    </CampaignItemContainer>
)

export default CampaignItem