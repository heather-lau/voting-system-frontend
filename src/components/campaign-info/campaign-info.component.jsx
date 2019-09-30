import React from 'react'

import { 
  CampaignItemContainer, 
  DataRange,
  VoteCounter,
  TotalVote,
  Votes,
  User
} from './campaign-info.styles'

const CampaignInfo = ({ campaign }) => (
  <CampaignItemContainer>
    <VoteCounter>
      <TotalVote>500</TotalVote>
      <Votes>votes</Votes>
    </VoteCounter>
    <div>
      <h2>{campaign.title}</h2>
      <User>by {campaign.hostBy}</User>
      <DataRange>from {campaign.starts} to {campaign.ends}</DataRange>
    </div>
  </CampaignItemContainer>
)

export default CampaignInfo