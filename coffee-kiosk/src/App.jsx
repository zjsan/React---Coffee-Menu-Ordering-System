import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileLayout from "./layouts/MobileLayout";
import TabletLayout from "./layouts/TabletLayout";
import LaptopLayout from "./layouts/LaptopLayout";
import LandingPage from "./components/LandingPage";
import MenuPage from "./components/MenuPage";

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
    <Router>
      <div className="bg-gray-100">
        <Layout />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>
    </Router>
  );
}
