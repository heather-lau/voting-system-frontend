import React from 'react'

import CampaignList from '../../components/campaign-list/campaign-list.component'
import VoteResultList from '../../components/vote-result-list/vote-result-list.component'

const HomePage = () => (
    <div>
        <h1>Campaigns</h1>
        <CampaignList/>
        <VoteResultList />
    </div>
)

export default HomePage