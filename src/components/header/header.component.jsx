import React from 'react'
import { connect } from 'react-redux'

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles'

import MenuToggle from '../menu-toggle/menu-toggle.component'
import MenuDropdown from '../menu-dropdown/menu-dropdown.component'

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      Vote
    </LogoContainer>
    <OptionsContainer>
      {currentUser ? (
        <MenuToggle name={currentUser.name}/>
      ) : (
        <OptionLink to='/signin'>Sign in</OptionLink>
      )}
    </OptionsContainer>
    {hidden ? null : <MenuDropdown/>}
  </HeaderContainer>
)

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  hidden: state.menu.hidden
})

export default connect(mapStateToProps)(Header)