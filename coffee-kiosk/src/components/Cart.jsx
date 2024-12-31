import React from 'react';


const Cart = () => {
  const { cartItems, removeItemFromCart, updateItemInCart } = useCart();

  const handleEdit = (index, newQuantity) => {
    const newItem = { ...cartItems[index], quantity: newQuantity };
    updateItemInCart(index, newItem);
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Coffee Kiosk Pro</h1>
      <h2 className="text-2xl mb-4">Cart</h2>
      <div className="mb-4">
       
      </div>
      <div>
        {cartItems.map((item, index) => (
          <div key={index} className="border p-4 mb-4 rounded-lg">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-full" />
            <h3 className="font-bold">{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <div className="flex space-x-4 mt-2">
              <button className="btn" onClick={() => handleEdit(index, item.quantity + 1)}>Edit</button>
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

export default Cart;
