import React from 'react'

import VoteResultItem from '../vote-result-item/vote-result-item.component';

import { 
  VoteResultListContainer,
  VoteResultItemContainer
} from './vote-result-list.styles'

const VoteResultList = ({options, totalVotes}) => (
  <VoteResultListContainer>
    {options.map(option => (
      <VoteResultItemContainer key={option._id}>
        <VoteResultItem option={option} totalVotes={totalVotes}/>
      </VoteResultItemContainer>
    ))}
  </VoteResultListContainer>
)

export default VoteResultList