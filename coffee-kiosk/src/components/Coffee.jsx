import MenuItem from "./MenuItem";

const Coffee = () => {
  const specialsMenu = [
      { name: "Americano", image: "/images/promo-latte.jpg" },
      { name: "Caramel Macchiato", price: 150, image: "/images/discount-americano.jpg" },
      { name: "Spanish Latte", price: 170,  image: "/images/discount-americano.jpg" },
      { name: "Mocha", image: "/images/discount-americano.jpg" },
      { name: "Latte", image: "/images/discount-americano.jpg" },
      { name: "Dirty Matcha", image: "/images/discount-americano.jpg" },
    ];
  
    return (
      <div className="h-screen bg-gray-50">
          <h1 className="text-2xl font-bold mb-4 text-center">Coffee</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {specialsMenu.map((item, index) => (
              <MenuItem
                key={index}
                name={item.name}
                image={item.image}
                onClick={() => console.log(`${item.name} clicked`)}
              />
            ))}
          </div>
      </div>
  )
}

export default Coffee
