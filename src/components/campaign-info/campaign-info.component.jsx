import React from 'react'
import dateFormat from 'dateformat'

import { 
  CampaignItemContainer, 
  DataRange,
  VoteCounter,
  TotalVote,
  Votes,
  User
} from './campaign-info.styles'

const CampaignInfo = ({ campaign }) => {
  const starts = dateFormat(campaign.starts, "d mmm, yyyy")
  const ends = dateFormat(campaign.ends, "d mmm, yyyy")

  return(
  <CampaignItemContainer>
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
)}

export default CampaignInfo