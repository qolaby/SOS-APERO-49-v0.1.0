import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Menu } from 'semantic-ui-react';
import Cart from '../Cart'

import './styles.css';

const SideMenu2 = props => (
 
  <Sidebar
    as={Menu}
    borderless
    animation="overlay"
    width="wide"
    visible={props.isVisible}
    icon="labeled"
    direction="right"
    inverted
  >
    
    <Cart/>
    
    
  </Sidebar>
);

SideMenu2.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default SideMenu2;
