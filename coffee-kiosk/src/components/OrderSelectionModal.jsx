import React from 'react';

const OrderSelectionModal = ({ isOpen, onClose, title, image, name, price, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box p-7 h-15  rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <img src={image} alt={name} className="w-24 h-15 rounded-full mb-4 mt-3" />
          <p className="text-gray-600 mb-4">{name}</p>
          <p className="text-xl font-bold mb-6">Price: {price}</p>
          {children}
        </div>
        <div className="flex justify-center flex-col mt-5"> 
          <button className="btn btn-primary mb-3">Add to Cart</button>
          <button className="btn btn-outline btn-primary" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSelectionModal;