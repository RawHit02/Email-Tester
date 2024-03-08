import React from 'react';
import pic from "../assets/email-marketing.png";

const Img = () => {
    return (
        <div className="w-3/5 max-w-lg mx-auto"> {/* This will size the image to 60% of its container width */}
            <img src={pic} alt="Email digest notification" className="w-full h-auto" />
        </div>
    )
}

export default Img;
