import React from 'react'

import VoteResultItem from '../vote-result-item/vote-result-item.component';

import { 
  VoteResultListContainer,
  VoteResultItemContainer
} from './vote-result-list.styles'

const options = [
  {
    id: "jslkdfjeoi23",
    name: 'Taylor Swift - Winner'
  },
  {
    id: "jslkdfjeo4trei",
    name: 'Ed Sheeran'
  },  
  {
    id: "jslkdfretrjeoi",
    name: 'Lady Gaga'
  },
  {
    id: "jslkdfjeoisfdg",
    name: 'Post Malone'
  },
  {
    id: "jslkdfjeoi234",
    name: 'Billie Eillish'
  },  
  {
    id: "jslkdfjeoi34r",
    name: 'Sam Smith'
  }
]

const VoteResultList = () => (
  <VoteResultListContainer>
    {options.map(option => (
      <VoteResultItemContainer>
        <VoteResultItem key={option.id} option={option}/>
      </VoteResultItemContainer>
    ))}
  </VoteResultListContainer>
)

export default VoteResultList