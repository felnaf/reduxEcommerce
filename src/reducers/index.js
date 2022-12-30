import { combineReducers } from 'redux';
import Product from '../json/Product';

const ProductsReducer = (state = [], action) => {
  if (action.type === 'PRODUCTLIST') {
    state = action.payload;
  }
  return state;
};
const cartReducer = (state = [], action) => {
  if (action.type === 'ADDCART_ITEM') {
    // debugger;
    // state = action.payload;

    if (state.find((item) => item.id === action.payload.id)) {
      state = state.map((obj) => {
        if (obj.id === action.payload.id) {
          return {
            ...obj,
            qty: obj.qty + 1,
          };
        } else {
          return { ...obj };
        }
      });
    } else {
      state = [...state, { qty: 1, ...action.payload }];
    }
  }
  if (action.type === 'REMOVE_DATA') {
    state = state.filter((removedata) => removedata.id !== action.payload);
  }
  return state;
};

const getPriceRefinements = () => {
  let options = [
    {
      name: 'Under $20',
      value: '0-20',
      count: 0,
    },
    {
      name: '$20 to $40',
      value: '20-40',
      count: 0,
    },
    {
      name: 'Above $40',
      value: '40-*',
      count: 0,
    },
  ];

  options = options.map((data) => {
    let lowValue = parseInt(data.value.split('-')[0]);
    let highValue = !isNaN(parseInt(data.value.split('-')[1]))
      ? parseInt(data.value.split('-')[1])
      : 10000000;

    return {
      ...data,
      count: Product.filter(
        (data) => data.price >= lowValue && data.price <= highValue
      ).length,
    };
  });

  return options;
};

let prevState = {
  size: [],
  price: '',
  priceRefinements: getPriceRefinements(),
  color: [],
};

const filterReducer = (state = prevState, action) => {
  // debugger;
  switch (action.type) {
    case 'FILTER_DATA':
      if (action.payload.filterName === 'size') {
        return {
          ...state,
          size: action.payload.isChecked
            ? [...state.size, action.payload.fiterValue]
            : state.size.filter((d) => d !== action.payload.fiterValue),
        };
      }

      if (action.payload.filterName === 'color') {
        return {
          ...state, // all elts in prevState
          color: action.payload.isChecked // from prevState  only color is needed
            ? [...state.color, action.payload.filterValue]
            : state.color.filter((d) => d !== action.payload.filterValue),
        };
      }

      if (action.payload.filterName === 'price') {
        return {
          ...state,
          price: action.payload.filterValue,
        };
      }
  }

  // if (action.type === 'FILTER_DATA') {
  //   state = action.payload;
  // }
  return state;
};

export default combineReducers({
  productReducer: ProductsReducer,
  cart: cartReducer,
  filter: filterReducer,
});
