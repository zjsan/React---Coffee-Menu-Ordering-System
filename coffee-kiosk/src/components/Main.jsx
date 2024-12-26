import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Specials from "./Specials";
import Coffee from "./Coffee";

const Main = () => {
  return (
    <div className="h-screen bg-gray-50">
      <main className="flex-1 p-8">
        <Routes>
          <Route path="specials" element={<Specials />} />  
           <Route path="coffee" element={<Coffee/>} />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
