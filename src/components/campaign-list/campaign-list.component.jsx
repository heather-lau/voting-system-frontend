import React from 'react'

import CampaignItem from '../campaign-item/campaign-item.component'

const campaigns = [
    {
        "_id": "5d8b4e167ca03323e3898ab9",
        "title": "Who is the best NBA player in the history",
        "starts": "2019-09-21",
        "ends": "2019-10-21",
        "hostBy": "Heather Lau"
    },
    {
        "_id": "5d8b4e167ca03323e3898adf",
        "title": "Who is the best NBA player in the history",
        "starts": "2019-09-21",
        "ends": "2019-10-21",
        "hostBy": "Heather Lau"
    },
    {
        "_id": "5d8b4e167ca03323e3898a64",
        "title": "Who is the best NBA player in the history",
        "starts": "2019-09-21",
        "ends": "2019-10-21",
        "hostBy": "Heather Lau"
    },    
    {
        "_id": "5d8b4e167ca0333425328a12",
        "title": "Who is the best NBA player in the history",
        "starts": "2019-09-21",
        "ends": "2019-10-21",
        "hostBy": "Heather Lau"
    }
]

const CampaignList = () => (
    <div>
        {campaigns.map(campaign => (
            <CampaignItem key={campaign._id} campaign={campaign}/>
        ))}
    </div>
)

export default CampaignList