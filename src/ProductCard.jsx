import React, { useState } from 'react';

const ProductCard = ({ product, addToCart, removeFromCart, isInCart }) => {
  const [inCart, setInCart] = useState(isInCart);

  const toggleCartStatus = () => {
    if (inCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
    setInCart(!inCart);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <button onClick={toggleCartStatus}>
        {inCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
