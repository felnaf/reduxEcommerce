import React from 'react';
import { addCartItem } from '../actions';
import { removedata } from '../actions';
import { connect } from 'react-redux';

const ProductListItem = (props) => {
  // console.log(props);
  const cartId = props.addedProducts.map((item) => item.id);

  const getCartItem = (id, price) => {
    props.addedItems(id, price);
  };

  const RemoveCart = (id) => {
    props.removedata(id);
  };
  return (
    <div className="card" style={{ width: '12rem' }}>
      <img
        className="card-img-top"
        src={props.data.img}
        style={{ height: '250px' }}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <h4 className="card-title">${props.data.price}</h4>

        <p className="card-text">{props.data.desc}</p>
        <p className="card-text">{props.data.size}</p>

        <p className="card-text">{props.data.color}</p>

        <div>
          {!cartId.includes(props.data.id) && (
            <button
              onClick={() => getCartItem(props.data.id, props.data.price)}
              className="btn btn-primary"
            >
              Add to cart
            </button>
          )}

          {cartId.includes(props.data.id) && (
            <button
              className="btn btn-primary mt-2"
              onClick={() => getCartItem(props.data.id)}
            >
              Add more to cart
            </button>
          )}

          {cartId.includes(props.data.id) && (
            <button
              className="btn btn-danger mt-2"
              onClick={() => RemoveCart(props.data.id)}
            >
              Remove from cart
            </button>
          )}
          {/* </>
              ) : null} */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    addedProducts: state.cart,
  };
};
export default connect(mapStateToProps, {
  addedItems: addCartItem,
  removedata: removedata,
})(ProductListItem);
