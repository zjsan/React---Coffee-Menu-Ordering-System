import MenuItem from "./MenuItem";
import { useState } from "react";
import OrderSelectionModal from "./OrderSelectionModal";

const Extras = () => {
  
     const extrasMenu = [
        { name: "Espresso Shot", price: 30, image: "/pictures/f031ca74e7edf23c68acce2bcc308d97.jpg" },
        { name: "Syrup (15g)", price: 20, image: "/pictures/4508b664acbf51e9c8a66a9aeb3bbb8e.jpg" },
        { name: "Pancakes (5 pieces)", price: 40, image: "/pictures/61e92de738e35ec8224fa6407b6cb0f7.jpg" },
        
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
          <h1 className="text-2xl font-bold mb-4 text-center">Menu</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {  extrasMenu.map((item, index) => (
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
    
export default Extras
