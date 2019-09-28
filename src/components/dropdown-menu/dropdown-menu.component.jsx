import React from 'react'

import { DropdownMenuContainer } from './dropdown-menu.styles'

const DropdownMenu = () => (
  <DropdownMenuContainer>
    <button>New campaign</button>
    <button>Campaigns</button>
    <button>Sign out</button>
  </DropdownMenuContainer>
)

export default DropdownMenu