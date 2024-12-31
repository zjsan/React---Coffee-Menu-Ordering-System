import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(items);
  }, []);

  const removeItemFromCart = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleEdit = (index, newQuantity) => {
    const updatedItems = cartItems.map((item, i) => 
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  return (
    <div className="container h-full mx-auto py-10 bg-slate-300">
      <h1 className="text-3xl font-bold mb-4">Coffee Kiosk Pro</h1>
      <h2 className="text-2xl mb-4">Cart</h2>
      <div className="mb-4">
        <button className="btn" onClick={() => window.history.back()}>Close</button>
      </div>
      <div>
        {cartItems.map((item, index) => (
          <div key={index} className="border p-4 mb-4 rounded-lg">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-full" />
            <h3 className="font-bold">{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div className="flex space-x-4 mt-2">
              <input 
                type="number" 
                value={item.quantity}
                onChange={(e) => handleEdit(index, Math.max(Number(e.target.value), 1))}
                className="mt-1 block w-16 text-center px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                min="1"
              />
              <button className="btn" onClick={() => removeItemFromCart(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <h3 className="text-xl">Total: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h3>
        <button className="btn">Proceed Order</button>
      </div>
    </div>
  );
};

export default CartPage;
