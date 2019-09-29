import React from 'react'

import CampaignList from '../../components/campaign-list/campaign-list.component'
import TabBar from '../../components/tab-bar/tab-bar.component'

const UserCampaignsPage = () => (
    <div>
        <h1>Your Campaigns</h1>
        <TabBar/>
        <CampaignList/>
    </div>
)

export default UserCampaignsPage