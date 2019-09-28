import React from 'react'

import { TabBarContainer, Tab } from './tab-bar.styles'

const tabs = [
  {
    id: '1',
    name: 'Started'
  },
  {
    id: '2',
    name: 'Ended'
  },
  {
    id: '3',
    name: 'Pending'
  }
]

const TabBar = () => (
  <TabBarContainer>
    {tabs.map(tab => (
      <Tab key={tab.id}>
        {tab.name}
      </Tab>
    ))}
  </TabBarContainer>  
)

export default TabBar

