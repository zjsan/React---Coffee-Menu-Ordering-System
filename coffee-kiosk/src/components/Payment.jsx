
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
            <img src="/pictures/qrcode.jpg" alt="GCash QR code image for payment" />
        </div>
        </div>
        
    </div>
  );
};

export default Payment;
