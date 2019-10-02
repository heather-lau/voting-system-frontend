import React from 'react'
import dateFormat from 'dateformat'

import { 
  CampaignItemContainer, 
  DataRange,
  VoteCounter,
  TotalVote,
  Votes,
  User
} from './campaign-item.styles'

const CampaignItem = ({ campaign, handleClick }) => {
  const starts = dateFormat(campaign.starts, "d mmm, yyyy")
  const ends = dateFormat(campaign.ends, "d mmm, yyyy")

  return(
    <CampaignItemContainer onClick={handleClick}>
      <VoteCounter>
        <TotalVote>{campaign.totalVotes}</TotalVote>
        <Votes>votes</Votes>
      </VoteCounter>
      <div>
        <h2>{campaign.title}</h2>
        <User>by {campaign.hostBy}</User>
        <DataRange>from {starts} to {ends}</DataRange>
      </div>
    </CampaignItemContainer>
  )
}

export default CampaignItem