import React from 'react';

const CartQuantity = ({ cartItems }) => {
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
   <div> 
    <h1>Shoping cart</h1> 
   <div className="cart-quantity">
    Cart : {cartQuantity}
    </div>
    </div>
  );
};

export default CartQuantity;
