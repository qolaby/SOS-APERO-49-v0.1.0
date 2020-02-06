import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, Icon } from 'semantic-ui-react';

import './styles.css';

const SideMenu = props => (
  <Sidebar
    as={Menu}
    borderless
    animation="push"
    width="thin"
    visible={props.isVisible}
    icon="labeled"
    vertical
    inverted
    color="orange"
  >
    
    <Link to="/" onClick={props.closeMenu}>
      <Menu.Item name="home">
        <Icon name="home" />Home
      </Menu.Item>
    </Link>
    <Link to="/Categories" onClick={props.closeMenu}>
      <Menu.Item name="categories">
        <Icon name="browser" />Categories
      </Menu.Item>
    </Link>
    <Link to="/Panier" onClick={props.closeMenu}>
      <Menu.Item name="ordering">
        <Icon name="shopping basket" />Votre panier
      </Menu.Item>
    </Link>
    <Link to="/Login" onClick={props.closeMenu}>
    <Menu.Item name="account">
      <Icon name="user" />Utilisateur
    </Menu.Item>
    </Link>
    <Link to="" onClick={props.closeMenu}>
    <Menu.Item name="shipping">
      <Icon name="motorcycle" />Livraison
    </Menu.Item>
    </Link>
    <Link to="" onClick={props.closeMenu}>
    <Menu.Item name="locations">
      <Icon name="marker" />Nous trouver
    </Menu.Item>
    </Link>
    <Link to="" onClick={props.closeMenu}>
    <Menu.Item name="contact">
      <Icon name="envelope" />Nous contacter
    </Menu.Item>
    </Link>
  </Sidebar>
);

SideMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default SideMenu;
