import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const CartItemEdit = ({
  isOpen,
  onClose,
  item, // The cart item to edit (should include name, price, image, quantity, type, size)
  onUpdate,
}) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [type, setType] = useState(item.type);
  const [size, setSize] = useState(item.size);
  const [updatedPrice, setUpdatedPrice] = useState(item.price); // Initial price

  useEffect(() => {
    let newPrice = item.basePrice; // Start with base price
  
    if (type === "Hot") {
      newPrice -= 20; // Adjust for Hot
    } else if (type === "Iced" && size !== "Small") {
      newPrice += size === "Medium" ? 20 : 30; // Adjust for Iced and size
    }
  
    newPrice *= quantity; // Multiply by quantity
    setUpdatedPrice(newPrice); // Update state
  }, [type, size, quantity, item.basePrice]);
  
  

  useEffect(() => {
    // Disable size for "Hot" drinks or extras
    if (type === "Hot") {
      setSize(""); // Reset size
    } else if (type === "Iced" && size === "") {
      setSize("Small");
    }
  }, [type]);

  if (!isOpen) return null;

  const handleSaveChanges = () => {
    
    onUpdate({
      ...item,
      type,
      size,
      quantity,
      price: updatedPrice,
     }) // Pass the recalculated price); // Pass updated item back to parent
    onClose();
  };

  return (
    <div className="modal modal-open ">
      <div className="modal-box p-7 h-15 rounded-lg shadow-lg bg-gray-200">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Edit Item</h3>
          <img
            src={item.image}
            alt={item.name}
            className="w-32 h-15 rounded-3xl mb-4 mt-3"
          />
          <p className="text-gray-600 mb-4">{item.name}</p>
          <p className="text-xl font-bold mb-3">Price: {updatedPrice}</p>

          <form className="form mt-0 flex flex-col items-start">
            {/* Quantity Selection */}
            <div className="flex items-center">
              <span>Quantity: </span>
              <input
                type="number"
                id="quantity"
                className="mt-1 ml-1 block max-w-fit px-2 py-1 border border-gray-300 bg-gray-50 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                min="1"
                max="20"
              />
            </div>

            {/* Type Selection (if applicable) */}
            {item.type !== "N/A" && (
              <div className="mt-4 flex items-center justify-center">
                <span>Type: </span>
                <div className="ml-2 flex space-x-4 ">
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
            )}

            {/* Size Selection (if applicable) */}
            {item.size !== "N/A" && type === "Iced" && (
              <div className="mt-4 flex items-center justify-center">
                <span>Size: </span>
                <div className="ml-2 flex space-x-3">
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
            )}
          </form>
        </div>
        <div className="flex justify-center flex-col lg:flex-row lg:justify-end mt-5 ">
          <button
            className="btn btn-primary mb-3 lg:mb-0 lg:mr-2 bg-blue-700 text-gray-50"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
          <button className="btn btn-outline btn-primary" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// Add prop type validations
CartItemEdit.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CartItemEdit;
