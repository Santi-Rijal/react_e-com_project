import React, { useContext } from 'react'
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

import { BiLogoMastercard, BiLogoVisa, BiLogoPaypal } from 'react-icons/bi';
import { Context } from '../context/ContextProvider.js';

const Cart = () => {
  const { cart } = useContext(Context);

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.totalPrice, 0);
  }

  return (
    <div className="cart-page-container">
      <div className="cart-items-container">
        {cart.map(cartItem => (
          <CartItem key={cartItem.color + cartItem.size} cartItem={cartItem} />
        ))}
      </div>

      <div className="checkout">
        {cart.length > 0 && (
          <div className="total-breakdown">
            <div className="order-value space-between">
              <h5>Order Value</h5>
              <h5>${calculateTotal().toFixed(2)}</h5>
            </div>
            <div className="delivery space-between">
              <h5>Delivery</h5>
              <h5>$8.00</h5>
            </div>
          </div>
        )}

        <hr />

        <div className="total space-between">
          <h3>Total</h3>
          <h3>${(calculateTotal() + (cart.length > 0 ? 8 : 0)).toFixed(2)}</h3>
        </div>

        <p id="tax">* Item prices exclude tax</p>

        <button>Continue to checkout</button>

        <div className="payment-acceptance">
          <h5>We ccept:</h5>

          <div className="payment-types">
            <BiLogoMastercard />
            <BiLogoVisa />
            <BiLogoPaypal />
          </div>
        </div>

        <p>Prices and shipping costs are not confirmed until you've reached checkout.</p>
        <p id="return-policy">30-day returns. Read more about our <Link className="link" id="link">return and refund policy.</Link></p>
      </div>
    </div>
  )
}

export default Cart