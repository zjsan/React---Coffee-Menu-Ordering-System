import MenuItem from "./MenuItem"

const NonCoffee = () => {

   const specialsMenu = [
      { name: "Chocolate Milkshake",  price: 140, image: "/pictures/70ad1ecaee9c25763bde80a90e346ddf.jpg" },
      { name: "Oreo Strawberry", price: 140, image: "/pictures/15c4b4065fcd4f5463ebec624c6c80fd.jpg" },
      { name: "Milk Fudge", price: 150, image: "/pictures/b0c5fc211162f84bfcf38da6694b2eac.jpg" },
      
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
