// import React from 'react';
// import { connect } from 'react-redux';
// import { cartItem } from '../actions';

// const ProductListItem1 = (props) => {
//   console.log(props.cartItems);

//   const getCartItem = (id, price) => {
//     console.log(id);
//     props.items([...props.cartItems, { id: id, qty: 1, price: price }]);
//   };
//   console.log(props.data);
// const moreItems = (id) => {
//   console.log(id);
//   // console.log(props.data.id);
//   if (cartId !== id) {
//     // console.log(props.data.id);
//     console.log(cartId);
//     return props.data;
//     // props.items(props.cartItems);
//   }
//   return { ...props.data, qty: props.data.qty + 1 };
//   props.items();
//   // props.items({ ...props.cartItems, qty: props.cartItems.qty + 1 });
// };

//   const removeCart = (id) => {
//     console.log(id);
//     console.log(props.cartItems);

//     // props.cartItems
//     props.items(
//       props.cartId.includes(id) && props.cartItems.filter((d) => d.id !== id)
//     );
//   };
//   const cartId = props.cartItems.map((item) => item.id);
//   // console.log(cartId);

//   return (
//     <div className="card" style={{ width: '12rem' }}>
//       <img
//         className="card-img-top"
//         src={props.data.img}
//         style={{ height: '250px' }}
//         alt="Card image cap"
//       />
//       <div className="card-body">
//         <h5 className="card-title">{props.data.name}</h5>
//         <h4 className="card-title">${props.data.price}</h4>

//         <p className="card-text">{props.data.desc}</p>

//         <div>
//           <button
//             onClick={() => getCartItem(props.data.id, props.data.price)}
//             className="btn btn-primary"
//           >
//             Add to cart
//           </button>
//           {/* {props.cartItems ? (
//             <> */}
//           {cartId.includes(props.data.id) && (
//             <button
//               className="btn btn-primary mt-2"
//               onClick={() => moreItems(props.data.id)}
//             >
//               Add more to cart
//             </button>
//           )}
//           {/* <button className="btn btn-primary mt-2">Add more to cart</button> */}
//           <button
//             className="btn btn-danger mt-2"
//             onClick={() => removeCart(props.data.id)}
//           >
//             Remove from cart
//           </button>
//           {/* </>
//           ) : null} */}
//         </div>
//       </div>
//     </div>
//   );
// };
// const mapStateToProps = (state) => {
//   return {
//     cartItems: state.cart,
//   };
// };

// export default connect(mapStateToProps, { items: cartItem })(ProductListItem1);
