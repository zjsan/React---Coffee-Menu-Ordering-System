import { useNavigate } from "react-router-dom";


const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className="footer-container fixed bottom-0 mx-auto">
       <footer className="bg-gray-800 text-white p-4 flex justify-between items-center w-screen ">
      <div className="text-lg font-bold">
        Total: <span className="text-yellow-400">0.00</span>
      </div>
      <div className="flex justify-center w-full lg:w-1/2 lg:justify-center"> 
  <span className="text-sm text-gray-400">Your Order is Empty</span>
  <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-4 py-2 rounded ml-2"  onClick={() => navigate("/cart")}> 
    View Your Cart
  </button>
</div>
    </footer>
    </div>
   
    
  );
};

export default Footer;