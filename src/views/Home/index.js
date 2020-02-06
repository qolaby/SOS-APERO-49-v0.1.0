import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loader, Container } from 'semantic-ui-react';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroll-component';

import { fetchProducts } from '../Products/actions';
import { getProductsFetching, getProducts, productPropType, getProductsHasMore } from '../Products/reducer';
import ProductsList from '../../components/ProductsList';
import { closeSearch } from '../../components/NavBar/actions';
import { isSearchVisible } from '../../components/NavBar/reducer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.loadProducts = this.loadProducts.bind(this);
  }

  componentDidMount() {
    if (this.props.searchVisible) {
      this.props.closeSearch();
    }

    this.readProducts(1);
  }

  
  getFilteredProducts() {
    const items = this.props.products.filter(product => product.featured);
    if (items.length > 0) {
      return items;
    }

    return this.props.products;
  }

  loadProducts() {
    if (this.props.hasMore) {
      const items = this.getFilteredProducts();

      const nextPage = Math.round(items.length / 20) + 1;
      this.readProducts(nextPage);
    }
  }

  readProducts(page) {
    const { dispatch } = this.props;
    dispatch(fetchProducts({
      page,
      featured: 1,
      order: 'asc',
      orderby: 'title',
      per_page: 20,
    }));
  }

  render() {
    const { loading, products, hasMore } = this.props;

    if (loading === 1 && products.length === 0) {
      return (
        <div>
          <Loader active />
        </div>
      );
    }

    if (products.length === 0) {
      return (
        <Container>
          <p>Aucun produit trouvé.</p>
        </Container>
      );
    }

    // Filter featured products (if there are any)
    const items = this.getFilteredProducts();

    return (
      <InfiniteScroll
        dataLength={items.length}
        next={this.loadProducts}
        hasMore={hasMore}
      >
        <ProductsList products={_.orderBy(items, ['name'], ['asc'])} title="Home" />
      </InfiniteScroll>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(productPropType).isRequired,
  hasMore: PropTypes.bool.isRequired,
  searchVisible: PropTypes.bool.isRequired,
  closeSearch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: getProductsFetching(state.products),
  products: getProducts(state.products),
  hasMore: getProductsHasMore(state.products),
  searchVisible: isSearchVisible(state.navbar),
});

function mapDispatchToProps(dispatch) {
  return Object.assign({ dispatch }, bindActionCreators({ fetchProducts, closeSearch }, dispatch));
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
