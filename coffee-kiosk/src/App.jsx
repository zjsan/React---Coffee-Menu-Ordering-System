import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileLayout from "./layouts/MobileLayout";
import TabletLayout from "./layouts/TabletLayout";
import LaptopLayout from "./layouts/LaptopLayout";
import Landing from "./components/Landing";
import Page from "./components/Page";
import Specials from "./components/Specials";
import Coffee from "./components/Coffee";
import NonCoffee from "./components/NonCoffee";
import Notfound from "./components/Notfound";
import Extras from "./components/Extras";
import Cart from "./components/Cart";
import OrderSummary from "./components/OrderSummary";
import Payment from "./components/Payment";
import { TotalPriceProvider } from "./components/TotalPriceContext"; // Import the provider
import OrderPlacement from "./components/OrderPlacement";

export default function App() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isLaptop = useMediaQuery({ minWidth: 1025 });

  const Layout = () => {
    if (isMobile) return <MobileLayout />;
    if (isTablet) return <TabletLayout />;
    if (isLaptop) return <LaptopLayout />;
  };

  return (
    <TotalPriceProvider>
      <Router>
        <>
          <Layout />
          <Routes>
            <Route path="/" errorElement={<Notfound/>} element={<Landing />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/order-summary" element={<OrderSummary/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/order-placement" element={<OrderPlacement/>} />
            <Route path="/page" element={<Page />}>
              <Route path="specials" element={<Specials />} />
              <Route path="coffee" element={<Coffee />} />
              <Route path="non-coffee" element={<NonCoffee />} />
              <Route path="extras" element={<Extras />} />
            </Route> 
            <Route path="*" element={<Notfound />} />
          </Routes>
        </>
      </Router>
    </TotalPriceProvider>
  );
}
