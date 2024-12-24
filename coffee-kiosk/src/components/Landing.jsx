import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center landing">
      <h1 className="text-2xl font-bold">Welcome to Coffee Kiosk Pro</h1>
      <button 
        className="bg-gray-900 py-4 px-5 border-0 text-white rounded-3xl cursor-pointer start-button" 
         onClick={() => navigate("/page")}
      >
        Start Ordering
      </button>
    </div>


    
  )
}

export default Landing;