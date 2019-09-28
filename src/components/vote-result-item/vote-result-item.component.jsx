import React from 'react'

import { 
  BarContainer, 
  VoteResultContent,
  BarBackground, 
  Bar
} from './vote-result-item.styles'

const VoteResultItem = ({ option }) => (
  <div>
    <VoteResultContent>
      <h4>{option.name}</h4>
      <span>200 votes | 30 %</span>
    </VoteResultContent>
    <BarContainer>
      <BarBackground/>
      <Bar/>
    </BarContainer>
  </div>
)

export default VoteResultItem