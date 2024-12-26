import PropTypes from "prop-types";


const MenuItem = ({ name, image, onClick }) => {
  return (
    <div
    className="border rounded-lg p-4 text-center cursor-pointer hover:shadow-md"
    onClick={onClick}
  >
    <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
      {/* Replace with actual image */}
      <img src={image} alt={name} className="w-full h-full object-cover rounded-full" />
    </div>
    <p className="mt-2 font-semibold text-gray-700">{name}</p>
  </div>
  )
}
// Define prop types
MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
export default MenuItem
