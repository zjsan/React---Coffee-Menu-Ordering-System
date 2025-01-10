import MenuItem from "./MenuItem"
import { useState } from "react";
import OrderSelectionModal from "./OrderSelectionModal";

const NonCoffee = () => {

   const nonCoffeeMenu = [
      { name: "Chocolate Milkshake",  price: 140, image: "/pictures/70ad1ecaee9c25763bde80a90e346ddf.jpg" },
      { name: "Oreo Strawberry", price: 140, image: "/pictures/15c4b4065fcd4f5463ebec624c6c80fd.jpg" },
      { name: "Milk Fudge", price: 150, image: "/pictures/b0c5fc211162f84bfcf38da6694b2eac.jpg" },
      
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
      <div className=" bg-gray-50">
        <h1 className="text-2xl font-bold mb-4 text-center">Menu</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          { nonCoffeeMenu.map((item, index) => (
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
  

export default NonCoffee
