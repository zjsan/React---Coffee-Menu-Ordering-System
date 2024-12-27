import { useState } from "react";
import MenuItem from "./MenuItem";

const Specials = () => {
  const specialsMenu = [
    { name: "Caramel Macchiato", image: "/images/promo-latte.jpg" },
    { name: "Dirty Matcha", image: "/images/discount-americano.jpg" },
    { name: "Spanish Latte", image: "/images/discount-americano.jpg" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-center">Specials</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {specialsMenu.map((item, index) => (
          <MenuItem
            key={index}
            name={item.name}
            image={item.image}
            onClick={openModal}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
              <button className="btn" onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Specials;
