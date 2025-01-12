import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const OrderPlacement = () => {
  const [orderNumber, setOrderNumber] = useState(null);
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
  const navigate = useNavigate();
  
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center text-gray-900"> 
      <div className="container mx-auto py-10 px-4"> 
        <h2 className="text-3xl font-bold text-center mb-10">Thank you!</h2>
        <div className="text-center mb-8"> {/* Increased bottom margin */}
          <h4 className="mt-5">YOUR ORDER NUMBER IS: </h4>
          <span className="text-2xl font-bold">{orderNumber}</span> {/* Increased font size */}
          <p className="mt-4">Present your payment screenshot to the cashier</p> {/* Added top margin to paragraph */}
        </div>
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-8">
          <button onClick={() => navigate("/")} className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            Start New Order
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
  );
};

export default OrderPlacement;