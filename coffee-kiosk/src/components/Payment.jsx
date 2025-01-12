import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto py-10 px-4 flex-1">
        <h2 className="text-3xl font-bold text-center mb-6">Payment</h2>
        <div>
          <h4 className="text-center mb-4">SCAN THE QR CODE TO PAY YOUR ORDERS</h4>
          <img
            src="/pictures/qrcode.jpg"
            alt="GCash QR code image for payment"
            className="max-w-lg w-full m-auto"
          />
        </div>
      </div>
      <div className="container mx-auto py-5   px-4 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
        <button  onClick={() => navigate("/order-placement")} className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
          Proceed
        </button>
        <button
          onClick={() => window.history.back()}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Payment;
