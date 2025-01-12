import React, { useState, useEffect } from "react";
import { useTotalPrice } from "./TotalPriceContext"; // Import the context hook

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
  setSize,
}) => {
  const [updatedPrice, setUpdatedPrice] = useState(price); // State for updated price
  const { setTotalPrice } = useTotalPrice();// Get the setTotalPrice function from the context

  const handleAddToCart = () => {
    const newItem = { name, price: updatedPrice, image, quantity, type, size };
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Update the total price in the context 
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0); 
    setTotalPrice(totalPrice);
    
    onClose();
    alert('Item added to cart!');
  };

  useEffect(() => {
    // Update price based on type (Hot) and size (Iced) and quantity
    let newPrice = price;

    if (type === "Hot") {
      newPrice -= 20;
    } else if (type === "Iced" && size !== "Small") {
      newPrice += size === "Medium" ? 20 : 30;
    }

    newPrice *= quantity; // Apply quantity to the price

    setUpdatedPrice(newPrice);
  }, [type, size, price, quantity]);

  useEffect(() => {
    // Disable size selection for Hot drinks and reset size to default ("Small") when switching from Hot to Iced
    if (type === "Hot") {
      setSize(""); // Disable size for Hot
    } else if (type === "Iced" && size === "") { 
      setSize("Small"); // Reset size to Small when switching from Hot to Iced
    }
  }, [type, size, setSize]);

  useEffect(() => {
    // Disable type for specific items
    if (
      name === "Chocolate Milkshake" ||
      name === "Oreo Strawberry" ||
      name === "Milk Fudge"
    ) {
      setType("Iced") // Set type to N/A for these items
    }
  }, [name, setType]);

  useEffect(() => {
    // Disable type and size for Extras
    if (
      name === "Espresso Shot" ||
      name === "Syrup (15g)" ||
      name === "Pancakes (5 pieces)"
    ) {
      setType("N/A"); // Set type to N/A for Extras
      setSize("N/A"); // Set size to N/A for Extras
    }
  }, [name, setType, setSize]); 

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box p-7 h-15 rounded-lg shadow-lg text-gray-50">
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <img
            src={image}
            alt={name}
            className="w-32 h-15 rounded-3xl mb-4 mt-3"
          />
          <p className="text-gray-50 mb-4 ">{name}</p>
          <p className="text-xl font-bold mb-3">Price: {updatedPrice}</p>

          <form className="form mt-0 flex flex-col items-start">
            {/* Quantity Selection */}
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

            {/* Type Selection (enable for non-Extras except specific items) */}
            {!(
              name === "Espresso Shot" ||
              name === "Syrup (15g)" ||
              name === "Pancakes (5 pieces)" || 
              name === "Chocolate Milkshake" || 
              name === "Oreo Strawberry" ||
              name === "Milk Fudge"
            ) && (
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
            )}

            {/* Size Selection (enable for Iced drinks and non-Extras) */}
            {!(
              name === "Espresso Shot" ||
              name === "Syrup (15g)" ||
              name === "Pancakes (5 pieces)"
            ) &&
              type === "Iced" && (
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
              )}
          </form>
        </div>
        <div className="flex justify-center flex-col lg:flex-row lg:justify-end mt-5">
          <button className="btn btn-primary mb-3 lg:mb-0 lg:mr-2" onClick={handleAddToCart}>
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
