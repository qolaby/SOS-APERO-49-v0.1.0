import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment, Divider, Icon, Label, Menu, Image, Dropdown, Button, Modal } from 'semantic-ui-react';
import { openMenu } from './actions';
import { getCart } from '../../views/Cart/reducer';

import MessageExampleAttached from './MessageExampleAttached'
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.showSidebar = this.showSidebar.bind(this);
  }

 
  getQuantity() {
    const cart = this.props.cart;
    return cart.reduce((quantity, item) => item.quantity + quantity, 0);
  }

  showSidebar(e) {
    e.stopPropagation();
    this.props.openMenu();
  }

 
  
  
  render() {


     const trigger = (
    <Icon name='ellipsis vertical' className="shop-icon" />
)

const options = [
  {
    key: 'user',
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'stars', text: 'Your Stars' },
  { key: 'explore', text: 'Explore' },
  { key: 'integrations', text: 'Integrations' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
]

    return (
      
      <Segment basic inverted size="small" className="nav-bar">
        <Menu fluid secondary>
          <Menu.Item onClick={this.showSidebar} fitted>
            <Icon name="content" size="large" onClick={this.showSidebar} className="shop-icon" />
          </Menu.Item>
          <Menu.Item className="shop-name" fitted>
            <Image avatar src={'logo.png'}/>
          </Menu.Item>
          

        <Menu.Item position="right" fitted>
        
        <Modal trigger={<Link to="#"><Icon name="user" size="large" className="shop-icon" /></Link>} closeIcon>
    <Modal.Header>Déjà membre ?</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Segment >
          <Button primary fluid>
               Se connecter
          </Button>
      <Divider horizontal>Ou</Divider>
         <MessageExampleAttached />
  </Segment>
      </Modal.Description>
    </Modal.Content>
  </Modal>

        <Icon.Group>
          <Link to="/Panier" className="cart-link">
                  <Icon name="cart" size="large" className="shop-icon"/>
                  {_.isEmpty(this.props.cart) ? null : (
                    <Label color="yellow" size="mini" floating circular content={this.getQuantity()} className="cart-counter" />
                  )}
                </Link>
         
          </Icon.Group>

         <Dropdown trigger={trigger} options={options} pointing='top right' icon={null} />

          </Menu.Item>

        </Menu>
      </Segment>
      
    );
  }
}

NavBar.propTypes = {
  openMenu: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  cart: getCart(state.cart),
});

export default connect(mapStateToProps, { openMenu })(NavBar);
