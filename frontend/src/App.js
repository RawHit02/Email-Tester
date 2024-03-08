import React from 'react';
import "./app.css";
import Body from "./components/Body";
import Img from "./components/Img";

function App() {
  return (
    <div className="bg-[#303053] text-white min-h-screen flex flex-col items-center justify-center p-6">
      {/* Image container */}
      <div className="w-3/5 max-w-lg mb-12"> {/* Adjust this to 60% of the parent's width */}
        <Img /> {/* Img component should have styling to control its size */}
      </div>

      {/* Form container */}
      <div className="w-full max-w-md"> {/* Ensures the form does not exceed the maximum width */}
        <Body /> {/* Body component will contain the form */}
      </div>
    </div>
    
  );
}

export default App;
