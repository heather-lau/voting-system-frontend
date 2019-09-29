import React from 'react';
import { connect } from 'react-redux'

import { toggleMenuHidden } from '../../redux/menu/menu.actions'

const MenuToggle = ({ toggleCartHidden, name }) => (
  <div onClick={toggleCartHidden}>
    {name}
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleMenuHidden())
})

export default connect(
  null,
  mapDispatchToProps
)(MenuToggle);
