import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { resetCurrentUser } from '../../redux/user/user.actions'
import { toggleMenuHidden } from '../../redux/menu/menu.actions'

import Auth from '../../utils/auth'

import { DropdownMenuContainer, MenuItem } from './menu-dropdown.styles'

const MenuDropdown = ({ resetCurrentUser, toggleCartHidden, history }) => {
  const removeUser = () => {
      resetCurrentUser()
      toggleCartHidden()
      Auth.removeTokens()
      history.push('/')
  }

  return(
  <DropdownMenuContainer>
    <MenuItem onClick={() => {history.push('/new-campaign')}}>
      <span>New campaign</span>
    </MenuItem>
    <MenuItem onClick={() => {history.push('/me/campaigns')}}>
      <span>Campaigns</span>
    </MenuItem>
    <MenuItem onClick={removeUser}>
      <span>Sign out</span>
    </MenuItem>
  </DropdownMenuContainer>
)}


const mapDispatchToProps = dispatch => ({
  resetCurrentUser: () => dispatch(resetCurrentUser()),
  toggleCartHidden: () => dispatch(toggleMenuHidden())
})

export default connect(null, mapDispatchToProps)(withRouter(MenuDropdown))