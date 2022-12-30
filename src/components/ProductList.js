import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { productList } from '../actions';
import Product from '../json/Product';
import ProductListItem from './ProductListItem';

const ProductList = (props) => {
  // console.log(props.filter);

  useEffect(() => {
    props.productItems(Product);
  }, []);

  let product = props.products;

  if (props.filter.size.length) {
    product = product.filter((data) => props.filter.size.includes(data.size));
    // console.log(product)
  }

  if (props.filter.color.length) {
    product = product.filter((data) => props.filter.color.includes(data.color));
  }

  if (props.filter.price !== '') {
    let lowValue = parseInt(props.filter.price.split('-')[0]);
    let highValue = !isNaN(parseInt(props.filter.price.split('-')[1]))
      ? parseInt(props.filter.price.split('-')[1])
      : 100000;

    product = product.filter((item) => item.price >= lowValue && item.price <= highValue);
    console.log(product);
  }

  const productList = product.map((data) => {
    return <ProductListItem data={data} key={data.id} />;
  });
  return (
    <div className="container d-flex justify-content-around display mt-5">
      {productList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productReducer,
    carts: state.cart,
    filter: state.filter,
  };
};
export default connect(mapStateToProps, { productItems: productList })(
  ProductList
);
