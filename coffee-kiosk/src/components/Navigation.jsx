import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="bg-gray-100 border-b border-gray-300 lg:border-0 lg:bg-gray-900 lg:text-white">
      <ul className="flex lg:flex-col lg:space-y-4 justify-around lg:justify-start text-gray-700 lg:text-white text-lg font-semibold py-2 lg:p-5">
        <li 
          className={`hover:text-yellow-400 cursor-pointer ${location.pathname === "/page/specials" ? "text-yellow-400" : ""}`}
        >
          <Link to="specials">Specials</Link>
        </li>
        <li 
          className={`hover:text-yellow-400 cursor-pointer ${location.pathname === "/page/coffee" ? "text-yellow-400" : ""}`}
        >
          <Link to="coffee">Coffee</Link>
        </li>
        <li 
          className={`hover:text-yellow-400 cursor-pointer ${location.pathname === "/page/non-coffee" ? "text-yellow-400" : ""}`}
        >
          <Link to="non-coffee">Non-Coffee</Link>
        </li>
        <li 
          className={`hover:text-yellow-400 cursor-pointer ${location.pathname === "/page/extras" ? "text-yellow-400" : ""}`}
        >
          <Link to="extras">Extras</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;