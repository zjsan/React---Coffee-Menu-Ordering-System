import { useMediaQuery } from "react-responsive";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MobileLayout from "./layouts/MobileLayout";
import TabletLayout from "./layouts/TabletLayout";
import LaptopLayout from "./layouts/LaptopLayout";
import Landing from "./components/Landing";
import Page from "./components/Page";
import Specials from "./components/Specials";
import Notfound from "./components/Notfound";

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
      <>
        <Layout />
        <Routes>
          <Route path="/" errorElement={<Notfound/>} element={<Landing />} />
          <Route path="/page" element={<Page />} errorElement={<Notfound/>} />
          <Route path="specials" element={<Specials />} />  
        </Routes>
      </>
    </Router>
  );
}
