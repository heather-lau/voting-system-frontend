import React from 'react'

import OptionItem from '../option-item/option-item.component'

import { OptionListContainer } from './option-list.styles'

const options = [
    {
        "_id": "234",
        "name": "Michael Jordan"
    },
    {
        "_id": "132434",
        "name": "Kobe Bryant"
    },
    {
        "_id": "1234234",
        "name": "Leborn James"
    },
    {
        "_id": "123545325423",
        "name": "Michael Jordan"
    },
    {
        "_id": "436543323",
        "name": "Kobe Bryant"
    },
    {
        "_id": "5d8b4e167ca03323e3898ab7",
        "name": "Leborn James"
    }
]

const OptionList = () => (
    <OptionListContainer>
        {options.map(option => (
            <OptionItem key={option._id} option={option.name}/>
        ))}
    </OptionListContainer>
)

export default OptionList