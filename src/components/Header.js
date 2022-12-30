import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
  return <div className="header">Cart :{props.cartItems.length}</div>;
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
  };
};

export default connect(mapStateToProps)(Header);
