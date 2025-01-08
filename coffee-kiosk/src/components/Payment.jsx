
import { useNavigate } from "react-router-dom";
import Header from "./Header";
const Payment = () => {


  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <div className="container mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Payment</h2>
        <div>
            <h4 className="text-center">SCAN THE QR CODE TO PAY YOUR ORDERS</h4>
            <img src="/pictures/qrcode.jpg" alt="GCash QR code image for payment" className="max-w-lg m-auto"/>
        </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600"
          >
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
