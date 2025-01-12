import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const OrderPlacement = () => {
  const [orderNumber, setOrderNumber] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrderNumber = localStorage.getItem('orderNumber');
    if (storedOrderNumber) {
      setOrderNumber(parseInt(storedOrderNumber)); 
    } else {
      const newOrderNumber = Math.floor(Math.random() * 501);
      setOrderNumber(newOrderNumber);
      localStorage.setItem('orderNumber', newOrderNumber);
    }
  }, []); 

  const handleStartNewOrder = () => {
    localStorage.removeItem('cartItems'); // Clear cart items from localStorage
    localStorage.removeItem('orderNumber'); // Remove the stored order number
    navigate("/"); 
    window.location.reload(); // Trigger page refresh
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-gray-900"> 
      <div className="container mx-auto py-10 px-4"> 
        <h2 className="text-3xl font-bold text-center mb-10">Thank you!</h2>
        <div className="text-center mb-8"> 
          <h4 className="mt-5">YOUR ORDER NUMBER IS: </h4>
          <span className="text-2xl font-bold">{orderNumber}</span> 
          <p className="mt-4">Present your payment screenshot to the cashier</p> 
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-8">
          <button onClick={handleStartNewOrder} className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            Start New Order
          </button>
      
        </div>
      </div>
    </div>
  );
};

export default OrderPlacement;