import { useState } from "react";
import MenuItem from "./MenuItem";
import OrderSelectionModal from "./OrderSelectionModal";

const Specials = () => {
  const specialsMenu = [
    { name: "Caramel Macchiato", price: 150, image: "/images/promo-latte.jpg" },
    { name: "Dirty Matcha", price: 120, image: "/images/discount-americano.jpg" },
    { name: "Spanish Latte", price: 170, image: "/images/discount-americano.jpg" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ name: "", price: 0, image: "" });

  const openModal = (name, price, image) => {
    setSelectedItem({ name, price, image });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem({ name: "", price: 0, image: "" });
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
            onClick={() => openModal(item.name, item.price, item.image)}
          />
        ))}
      </div>

      <OrderSelectionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Item Selected"
        image={selectedItem.image}
        name={selectedItem.name}
        price={selectedItem.price}
      >
        <p>Additional content can go here.</p>
      </OrderSelectionModal>
    </div>
  );
};

export default Specials;
