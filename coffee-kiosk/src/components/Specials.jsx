import { useState } from "react";
import MenuItem from "./MenuItem";

const Specials = () => {
  const specialsMenu = [
    { name: "Caramel Macchiato", price: 150, image: "/images/promo-latte.jpg" },
    { name: "Dirty Matcha", price: 120, image: "/images/discount-americano.jpg" },
    { name: "Spanish Latte", price: 170, image: "/images/discount-americano.jpg" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0)
  const [selectedImage, setSelectedImage] = useState("")

  const openModal = (name,price,image) => {
    setSelectedItemName(name);
    setSelectedPrice(price)
    setSelectedImage(image)
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItemName(""); // Reset the selected item name when closing the modal
    setSelectedPrice(0)
  };

  return (
    <div className="h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-center">Specials</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {specialsMenu.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
            onClick={() => openModal(item.name,item.price,item.image)}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box py-10 px-10 ">
            <div className="">
            <h3 className="font-bold text-lg">Item Selected</h3>
            <img src={selectedImage} alt={selectedItemName} className="w-full h-full object-cover rounded-full" />
            <p className="py-5">{selectedItemName}</p>
            <p className="py-5">{selectedPrice}</p>
            </div>
            <div className="modal-action">
              <button className="btn">Add to Cart</button>
              <button className="btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Specials;
