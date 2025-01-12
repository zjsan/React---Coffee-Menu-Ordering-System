const OrderPlacement = () => {

  let orderNumber = Math.floor(Math.random() * 501)
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="container mx-auto py-10 px-4 flex-1">
        <h2 className="text-3xl font-bold text-center mb-6">Thank you!</h2>
        <div>
          <h4 className="text-center mb-4">YOUR ORDER NUMBER IS: </h4>
          <span className="text-center mb-4">{orderNumber}</span>
          <p className="text-center mb-4">Present your payment screenshot to the cashier</p>
        </div>
        <div className="container mx-auto py-5   px-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
          Start New Order
        </button>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
        >
          Close
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default OrderPlacement;
