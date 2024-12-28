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
  type, 
  setType,
  size, 
  setSize
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
          <p className="text-xl font-bold mb-3">Price: {price}</p>

          <form className="form mt-0 flex flex-col items-start" action="">
            {/**Quantity Selection */}
            <div className="flex items-center"> 
            <span>Quantity: </span>
            <input
              type="number"
              id="quantity"
              className="mt-1 ml-1 block max-w-fit px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              min="1"
              max="20"
            />
            </div>

          {/* Type Selection */}
          <div className="mt-0 mb-0 h-1 p-0 flex items-center justify-center py-5 ">
            <span>Type: </span>
            <div className="mt-0 ml-1 flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="type"
                  value="Iced"
                  checked={type === "Iced"}
                  onChange={(e) => setType(e.target.value)}
                  className="mr-2"
                />
                Iced
              </label>
              <label>
                <input
                  type="radio"
                  name="type"
                  value="Hot"
                  checked={type === "Hot"}
                  onChange={(e) => setType(e.target.value)}
                  className="mr-2"
                />
                Hot
              </label>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-0 p-0 h-1 flex items-center justify-center py-5">
            <span>Size: </span>
            <div className="mt-1 ml-1 flex space-x-3">
              <label>
                <input
                  type="radio"
                  name="size"
                  value="Small"
                  checked={size === "Small"}
                  onChange={(e) => setSize(e.target.value)}
                  className="mr-2"
                />
                Small
              </label>
              <label>
                <input
                  type="radio"
                  name="size"
                  value="Medium"
                  checked={size === "Medium"}
                  onChange={(e) => setSize(e.target.value)}
                  className="mr-2"
                />
                Medium
              </label>
              <label>
                <input
                  type="radio"
                  name="size"
                  value="Large"
                  checked={size === "Large"}
                  onChange={(e) => setSize(e.target.value)}
                  className="mr-2"
                />
                Large
              </label>
            </div>
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
