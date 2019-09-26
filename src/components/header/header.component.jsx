import React from 'react'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      Vote
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/signin'>Sign in</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
)

export default Header