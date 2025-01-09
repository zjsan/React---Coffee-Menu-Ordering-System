import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Navigation from './Navigation';

const Page = () => {
  return (
    <div className="lg:flex lg:max-h-screen">
      {/* Sidebar (Navigation) */}
      <div className="lg:max-w-xs lg:max-h-screen lg:bg-gray-900">
        <Header />
        <Navigation />
      </div>

      {/* Main Content */}
      <div className="lg:flex-1">
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
