import PropTypes from "prop-types";
const Index = ({ onStart }) => {

  return (
    <div className="h-screen flex flex-col justify-center landing">
      <h1 className="text-2xl font-bold">Welcome to Coffee Kiosk Pro</h1>
      <button 
        className="bg-gray-900 py-4 px-5 border-0 text-white rounded-3xl cursor-pointer start-button" 
        onClick={onStart} // Corrected onClick handler
      >
        Start Ordering
      </button>
    </div>
  )
}

// Define prop types
Index.propTypes = {
  onStart: PropTypes.func.isRequired, 
};
export default Index;