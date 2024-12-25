const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 flex justify-between items-center max-w-screen-xl mx-auto">
      <div className="text-lg font-bold">
        Total: <span className="text-yellow-400">0.00</span>
      </div>
      <div className="flex justify-end"> 
        <span className="text-sm text-gray-400">Your Order is Empty</span>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-4 py-2 rounded ml-2"> 
          View Your Cart
        </button>
      </div>
    </footer>
  );
};

export default Footer;