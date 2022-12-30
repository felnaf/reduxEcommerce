import React from 'react';
import { connect } from 'react-redux';
import { filterdata } from '../actions';

const ColorFilter = (props) => {
  // console.log(props);

  const getFilterColor = (e, color) => {
    props.onFilterData({
      filterName: 'color',
      filterValue: color,
      isChecked: e.target.checked,
    });
  };

  return (
    <div>
      <input type="checkbox" onChange={(e) => getFilterColor(e, props.color)} />
      <label>{props.color}</label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};
export default connect(mapStateToProps, { onFilterData: filterdata })(
  ColorFilter
);
