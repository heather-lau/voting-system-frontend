import React from 'react'
import { withRouter } from 'react-router-dom'

import { 
  CampaignItemContainer, 
  DataRange,
  VoteCounter,
  TotalVote,
  Votes,
  User
} from './campaign-item.styles'

const CampaignItem = ({ campaign, history, match }) => (
  <CampaignItemContainer
    onClick={() => history.push(`${match.url}/${campaign._id}`)}
  >
    <VoteCounter>
      <TotalVote>500</TotalVote>
      <Votes>votes</Votes>
    </VoteCounter>
    <div>
      <h2>{campaign.title}</h2>
      <User>by {campaign.hostBy.name}</User>
      <DataRange>from {campaign.starts} to {campaign.ends}</DataRange>
    </div>
  </CampaignItemContainer>
)

export default withRouter(CampaignItem)