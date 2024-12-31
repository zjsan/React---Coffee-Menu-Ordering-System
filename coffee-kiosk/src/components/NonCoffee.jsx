import MenuItem from "./MenuItem"

const NonCoffee = () => {

   const specialsMenu = [
      { name: "Hot Cholocate", image: "/images/promo-latte.jpg" },
      { name: "Oreo Strawberry", image: "/images/discount-americano.jpg" },
      { name: "Milk Fudge", image: "/images/discount-americano.jpg" },
      
    ];
  return (
       <div className="h-screen bg-gray-50">
           <h1 className="text-2xl font-bold mb-4 text-center">Non-Coffee</h1>
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

export default NonCoffee
