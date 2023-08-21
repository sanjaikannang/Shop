import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CartQuantity from './CartQuantity';
import './App.css'

const productsData = [
  { id: 1, name: 'Fancy Product', description: '$40.00 - $80.00',image: 'product1.jpg'},
  { id: 2, name: 'Special Item', description: '$20.00 $18.00',image: 'product2.jpg'},
  { id: 3, name: 'Popular Item', description: '$50.00 $25.00',image: 'product3.jpg'},
  { id: 4, name: 'Fancy Product', description: '$40.00',image: 'product4.jpg'},
  { id: 5, name: 'Special Item', description: '$50.00 $25.00',image: 'product5.jpg'},
  { id: 6, name: 'Popular Item', description: '$120.00 - $280.00',image: 'product6.jpg'},
  { id: 7, name: 'Fancy Product', description: '$20.00 $18.00',image: 'product7.jpg'},
  { id: 8, name: 'Special Item', description: '$40.00',image: 'product8.jpg'}
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter(item => item.product.id !== product.id);
    setCartItems(updatedCart);
  };

  return (
    <div className="app">
      <CartQuantity cartItems={cartItems} />
      <div className="product-list">
        {productsData.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isInCart={cartItems.some(item => item.product.id === product.id)}
          />
        ))}
      </div>
      <h5>CopyRights @2023</h5> 
    </div>
  );
};

export default App;

