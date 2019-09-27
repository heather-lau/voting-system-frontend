import React from 'react'

import { CustomButtonContainer } from './custom-button.styles'

const CutsomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
)

export default CutsomButton