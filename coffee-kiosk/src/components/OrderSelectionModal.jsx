import React from "react";

const OrderSelectionModal = ({
  isOpen,
  onClose,
  title,
  image,
  name,
  price,
  quantity,
  setQuantity,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box p-7 h-15  rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <img
            src={image}
            alt={name}
            className="w-24 h-15 rounded-full mb-4 mt-3"
          />
          <p className="text-gray-600 mb-4">{name}</p>
          <p className="text-xl font-bold mb-6">Price: {price}</p>
          {children}
          <form className="form" action="">
            <div className="flex items-center">
            <span>Quantity: </span>
            <input
              type="number"
              id="quantity"
              className="mt-1 ml-1 block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              max="20"
            />
            </div>
          </form>
        </div> 
        <div className="flex justify-center flex-col lg:flex-row lg:justify-end mt-5">
          <button className="btn btn-primary mb-3 lg:mb-0 lg:mr-2">
            Add to Cart
          </button>
          <button className="btn btn-outline btn-primary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSelectionModal;
