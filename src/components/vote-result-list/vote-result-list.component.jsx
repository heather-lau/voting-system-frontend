import React from 'react'

import VoteResultItem from '../vote-result-item/vote-result-item.component';

import { 
  VoteResultListContainer,
  VoteResultItemContainer
} from './vote-result-list.styles'

const options = [
  {
    id: "9ugs",
    name: 'Taylor Swift - Winner'
  },
  {
    id: "fsg9p0ug",
    name: 'Ed Sheeran'
  },  
  {
    id: "fpsu89",
    name: 'Lady Gaga'
  },
  {
    id: "ifoahsd",
    name: 'Post Malone'
  },
  {
    id: "flihu4",
    name: 'Billie Eillish'
  },  
  {
    id: "ldsafhiu",
    name: 'Sam Smith'
  }
]

const VoteResultList = () => (
  <VoteResultListContainer>
    {options.map(option => (
      <VoteResultItemContainer key={option.id}>
        <VoteResultItem option={option}/>
      </VoteResultItemContainer>
    ))}
  </VoteResultListContainer>
)

export default VoteResultList