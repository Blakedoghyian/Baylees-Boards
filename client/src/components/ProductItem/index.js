import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../../utils/actions';
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const {
    image,
    name,
    _id,
    price
  } = item;

  const [state, dispatch] = useStoreContext();

  const { cart } = state;

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  function RegularItem(props) {
    return <button className="btn btn-lg" type="button" onClick={addToCart}>Add to cart</button>;
  }
  
  function CustomItem(props) {
    return <Link to={'/contact'}><button className="btn btn-lg" type="button">Customize a Board</button></Link>
  }

  function RenderButton(props) {
    const hasPrice = item.price;
    if (hasPrice > 0) {
      return <RegularItem />;
    }
    return <CustomItem />;
  }

  return (
    <div className="card productCard">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <span>${price}</span>
      </div>
      <RenderButton />
    </div>
  );
}

export default ProductItem;
