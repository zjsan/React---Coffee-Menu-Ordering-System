import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import CartItemEdit from "./CartItemEdit"; // Import the modal component

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null); // Track which item is being edited
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  const removeItemFromCart = (index) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
  };

  const handleEditItem = (index) => {
    setSelectedItemIndex(index);
    setEditModalOpen(true);
  };

  const handleUpdateItem = (updatedItem) => {
    const updatedItems = cartItems.map((item, i) =>
      i === selectedItemIndex ? updatedItem : item
    );
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    setEditModalOpen(false);
  };

  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Cart</h2>

        {cartItems.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <p className="text-center text-gray-600">Your cart is empty.</p>
            <button
              onClick={() => window.history.back()}
              className="bg-blue-400 hover:bg-blue-300 text-gray-50 font-bold px-3 py-3 rounded ml-2 mt-10 w-full md:max-w-xs"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="grid gap-6">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border p-4 rounded-lg bg-white shadow-sm"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-500">Price: {item.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleEditItem(index)}
                      className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeItemFromCart(index)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4">
              <h3 className="text-2xl font-bold mb-4 md:mb-0">
                Total: {calculateTotal().toFixed(2)}
              </h3>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <button
                  onClick={() => navigate("/order-summary", { cartItems })}
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
                >
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Render the Edit Modal */}
      {isEditModalOpen && selectedItemIndex !== null && (
        <CartItemEdit
          isOpen={isEditModalOpen}
          onClose={() => setEditModalOpen(false)}
          item={{
            ...cartItems[selectedItemIndex],
            basePrice: cartItems[selectedItemIndex].basePrice || cartItems[selectedItemIndex].price,
            price: cartItems[selectedItemIndex].price || 0
          }} // Ensure basePrice and price are not undefined or null
          onUpdate={handleUpdateItem}
        />
      )}
    </div>
  );
};

export default CartPage;
