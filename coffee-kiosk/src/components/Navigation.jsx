const Navigation = () => {
  return (
    <nav className="bg-gray-100 border-b border-gray-300 lg:border-0 lg:bg-gray-900 lg:text-white">
      <ul className="flex lg:flex-col lg:space-y-4 justify-around lg:justify-start text-gray-700 lg:text-white text-lg font-semibold py-2 lg:p-5">
        <li className="hover:text-yellow-400 cursor-pointer">
          <a href="#specials">Specials</a>
        </li>
        <li className="hover:text-yellow-400 cursor-pointer">
          <a href="#coffee">Coffee</a>
        </li>
        <li className="hover:text-yellow-400 cursor-pointer">
          <a href="#non-coffee">Non-Coffee</a>
        </li>
        <li className="hover:text-yellow-400 cursor-pointer">
          <a href="#extras">Extras</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
