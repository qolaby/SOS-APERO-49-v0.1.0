import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Header } from 'semantic-ui-react';
import { cartProductPropType } from './reducer';
import Checkout from './Checkout';
import config from '../../config/config';

const CartSummary = props => (
  <Card centered>
    <Card.Content>
      <Card.Header as={Header} textAlign="left">
        Votre commande
      </Card.Header>
      <Grid doubling>
        <Grid.Row>
          <Grid.Column width={12}>Total</Grid.Column>
          <Grid.Column textAlign="right" width={4}>
            <div dangerouslySetInnerHTML={{ __html: config.CURRENCY + props.total }} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Checkout cart={props.cart} />
    </Card.Content>
  </Card>
);

CartSummary.propTypes = {
  total: PropTypes.number.isRequired,
  cart: PropTypes.arrayOf(cartProductPropType).isRequired,
};

export default CartSummary;
