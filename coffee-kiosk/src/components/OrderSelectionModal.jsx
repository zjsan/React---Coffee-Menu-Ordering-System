import React from 'react';

const OrderSelectionModal = ({ isOpen, onClose, title, image, name, price, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box py-10 px-10">
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
          <p className="py-5">{name}</p>
          <p className="py-5">{price}</p>
          {children}
        </div>
        <div className="modal-action">
          <button className="btn">Add to Cart</button>
          <button className="btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSelectionModal;
