import React from 'react'
import { withRouter } from 'react-router-dom'

import Auth from '../../utils/auth'

import { DropdownMenuContainer, MenuItem } from './menu-dropdown.styles'

const MenuDropdown = ({ history }) => (
  <DropdownMenuContainer>
    <MenuItem onClick={() => {history.push('/new-campaign')}}>
      <span>New campaign</span>
    </MenuItem>
    <MenuItem onClick={() => {history.push('/me/campaigns')}}>
      <span>Campaigns</span>
    </MenuItem>
    <MenuItem onClick={() => {
      Auth.removeTokens()
      history.push('/')
    }}>
      <span>Sign out</span>
    </MenuItem>
  </DropdownMenuContainer>
)

export default withRouter(MenuDropdown)