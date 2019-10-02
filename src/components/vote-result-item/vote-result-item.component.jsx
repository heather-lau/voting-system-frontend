import React from 'react'

import { 
  BarContainer, 
  VoteResultContent,
  BarBackground, 
  Bar
} from './vote-result-item.styles'


const VoteResultItem = ({ option, totalVotes }) => {
  const votePercentage = totalVotes ? (
    Math.floor(option.totalVotes / totalVotes * 100) + '%'
  ) : 0 + '%'

  return (
    <div>
      <VoteResultContent>
        <h4>{option.name}</h4>
        <span>{option.totalVotes} votes | {votePercentage}</span>
      </VoteResultContent>
      <BarContainer>
        <BarBackground/>
        <Bar percentage={votePercentage}/>
      </BarContainer>
    </div>
  )
}

export default VoteResultItem