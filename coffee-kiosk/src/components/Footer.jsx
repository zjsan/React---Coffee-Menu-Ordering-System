const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 flex justify-between items-center fixed bottom-0 w-full">
      <div className="text-lg font-bold">
        Total: <span className="text-yellow-400">0.00</span>
      </div>
      <div className="flex space-x-4">
        <span className="text-sm text-gray-400">Your Order is Empty</span>
        <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-4 py-2 rounded">
          View Your Cart
        </button>
      </div>
    </footer>
  );
};

export default Footer;
