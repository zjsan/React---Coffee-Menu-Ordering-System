import MenuItem from "./MenuItem";
import { useState } from "react";
import OrderSelectionModal from "./OrderSelectionModal";

const Coffee = () => {
  const coffeeMenu = [
      { name: "Americano", price: 120, image: "/images/promo-latte.jpg" },
      { name: "Caramel Macchiato", price: 150, image: "/images/discount-americano.jpg" },
      { name: "Spanish Latte", price: 160,  image: "/images/discount-americano.jpg" },
      { name: "Mocha", image: "/images/discount-americano.jpg" },
      { name: "Latte", image: "/images/discount-americano.jpg" },
      { name: "Dirty Matcha", image: "/images/discount-americano.jpg" },
    ];
  
    const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ name: "", price: 0, image: "" });
  const [quantity, setQuantity] = useState(1);
  const [type, setType] = useState("Iced");
  const [size, setSize] = useState("Small");

  const openModal = (name, price, image) => {
    setSelectedItem({ name, price, image });
    setType("Iced"); // Reset type to default when opening modal
    setSize("Small"); // Reset size to default when opening modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setQuantity(1); // Reset quantity to 1 when opening modal
    setSelectedItem({ name: "", price: 0, image: "" });
  };

  return (
    <div className="h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4 text-center">Specials</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {coffeeMenu.map((item, index) => (
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
        quantity={quantity} 
        setQuantity={setQuantity}
        type={type}
        setType={setType}
        size={size} 
        setSize={setSize}
      >
      </OrderSelectionModal>
    </div>
  );
};


export default Coffee
