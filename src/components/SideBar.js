import React from 'react';
import PriceFilter from './PriceFilter';
import SizeFilter from './SizeFilter';
import { onlyUnique } from '../utilis';
import { connect } from 'react-redux';
import ColorFilter from './ColorFilter';

const SideBar = (props) => {
  // console.log(props);
  let uniqeSizeData = props.products
    .map((data) => data.size)
    .filter(onlyUnique);

  const filterdata = uniqeSizeData.map((data, index) => {
    return <SizeFilter data={data} key={index} />;
  });
  // const filterPrice = props.
  const filterColor = props.products.map((data, index) => {
    return <ColorFilter color={data.color} key={index} />;
  });

  const priceFilter = props.filter.priceRefinements.map((price, index) => {
    return <PriceFilter price={price} key={index} />;
  });
  return (
    <div className='w-25'>
      <h6>Size</h6>
      <div>{filterdata}</div>
      <h6 className="mt-5">Color</h6>

      <div>{filterColor}</div>
      <h6 className="mt-5">Price</h6>
      <div>{priceFilter}</div>
    </div>
  );
  // return <div>{filterColor}</div>
};

const mapStateToProps = (state) => {
  return {
    products: state.productReducer,
    filter: state.filter,
  };
};

export default connect(mapStateToProps)(SideBar);
