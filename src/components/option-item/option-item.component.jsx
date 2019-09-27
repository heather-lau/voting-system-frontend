import React from 'react'

import { OptionItemContainer } from './option-item.styles'

const OptionItem = ({ option }) => (
    <OptionItemContainer>
        <p>{option}</p>
    </OptionItemContainer>
)

export default OptionItem