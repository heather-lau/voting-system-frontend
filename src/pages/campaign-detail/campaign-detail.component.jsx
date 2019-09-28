import React from 'react'

import CampaignInfo from '../../components/campaign-info/campaign-info.component'
import VoteResultList from '../../components/vote-result-list/vote-result-list.component'
import OptionList from '../../components/option-list/option-list.component'

const campaign = {
    "_id": "5d8b4e167ca0333425328a12",
    "title": "Who is the best NBA player in the history",
    "starts": "2019-09-21",
    "ends": "2019-10-21",
    "hostBy": "Heather Lau"
}

const CampaignDetailPage = () => (
    <div>
        <CampaignInfo campaign={campaign}/>
        <VoteResultList />
        <OptionList />
    </div>
)

export default CampaignDetailPage