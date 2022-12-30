import React from 'react';
import { connect } from 'react-redux';
import { filterdata } from '../actions';

const SizeFilter = (props) => {
//   console.log(props.filter);

  const getFilterSize = (e, size) => {
    props.onFilterData({
      filterName: 'size',
      fiterValue: size,
      isChecked: e.target.checked,
    });
  };
  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => getFilterSize(e, props.data)}
      ></input>
      <label>{props.data}</label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};
export default connect(mapStateToProps, { onFilterData: filterdata })(
  SizeFilter
);
