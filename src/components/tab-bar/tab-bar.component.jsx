import React from 'react'

import { TabBarContainer, Tab } from './tab-bar.styles'

const TabBar = ({ tabs, currentTab, handleClick }) => {

  return (
    <TabBarContainer>
      {tabs.map(tab => (
        <Tab key={tab} onClick={handleClick} value={tab} on={tab === currentTab ? true : false}>
          {tab}
        </Tab>
      ))}
    </TabBarContainer>
  )
}

export default TabBar
