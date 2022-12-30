export const productList = (products) => {
  return {
    type: 'PRODUCTLIST',
    payload: products,
  };
};
export const addCartItem = (id, price) => {
  // console.log(item);
  return {
    type: 'ADDCART_ITEM',
    payload: { id, price },
  };
};
export const filterdata = (items) => {
  return {
    type: 'FILTER_DATA',
    payload: items,
  };
};
export const removedata = (id) => {
  return {
    type: 'REMOVE_DATA',
    payload: id,
  };
};
