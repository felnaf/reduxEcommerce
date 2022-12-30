import React from 'react';
import { connect } from 'react-redux';
import { filterdata } from '../actions';

const PriceFilter = (props) => {
  console.log(props);

  const getFilterPrice = (price) => {
    props.onFilterdata({
      filterName: 'price',
      filterValue: price,
    });
  };

  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="flexRadioDefault1"
        value={props.price.value}
        onClick={() => getFilterPrice(props.price.value)}
      />
      <label className="form-check-label" htmlFor="flexRadioDefault1">
        {props.price.name} ({props.price.count})
      </label>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

export default connect(mapStateToProps, { onFilterdata: filterdata })(
  PriceFilter
);
