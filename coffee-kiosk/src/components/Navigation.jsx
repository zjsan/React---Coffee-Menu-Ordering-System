import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-100 border-b border-gray-300">
      <ul className="flex justify-around text-gray-700 text-sm font-semibold py-2">
        <li className="hover:text-yellow-400 cursor-pointer">
          <Link to="/specials">Specials</Link>
        </li>
        <li className="hover:text-yellow-400 cursor-pointer">
          <Link to="/coffee">Coffee</Link>
        </li>
        <li className="hover:text-yellow-400 cursor-pointer">
          <Link to="/non-coffee">Non-Coffee</Link>
        </li>
        <li className="hover:text-yellow-400 cursor-pointer">
          <Link to="/extras">Extras</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
