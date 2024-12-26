import { Routes, Route } from "react-router-dom";
import Specials from "./Specials";
import Coffee from "./Coffee";
import NonCoffee from "./NonCoffee";
import Extras from "./Extras";

const Main = () => {
  return (
    <div className="h-screen bg-gray-50">
      <main className="flex-1 p-8">
        <Routes>
          <Route path="specials" element={<Specials />} />  
           <Route path="coffee" element={<Coffee/>} />
           <Route path="non-coffee" element={<NonCoffee/>} />
           <Route path="extras" element={<Extras/>} />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
