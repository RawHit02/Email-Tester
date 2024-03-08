import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Body = () => {
    const [formInput, setFormInput] = useState({ notif: '', email: '' });
    const [buttonClicked, setButtonClicked] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        // Assuming the backend endpoint and POST request format are correct
        const response = await fetch("https://emaildigestbackend.onrender.com/api/v1/sending-email-digest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formInput),
        });
        const data = await response.json(); // Fetching the data from the response
        console.log(data); // Logging the response data
        setFormInput({ notif: '', email: '' });
    }

    const handleClick = () => {
        setButtonClicked(true);
        setTimeout(() => setButtonClicked(false), 100);
    };

    const onChangeHandler = e => {
        const { name, value } = e.target;
        setFormInput(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className="flex flex-col items-center space-y-8">
            <h1 className="text-5xl font-bold mb-6 whitespace-nowrap">Email Playground</h1>
            <p>Don't know how to? Start <a className="underline" href="https://docs.novu.co/platform/digest/"> here</a></p>
            <form className="flex flex-col items-center space-y-6" onSubmit={onSubmitHandler}>
                <div className="w-full max-w-md">
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="w-full py-3 border-2 rounded-xl text-black"
                        placeholder="Your Email here"
                        value={formInput.email}
                        id="email"
                        name="email"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="w-full max-w-md">
                    <label htmlFor="notif">
                        Notification:
                    </label>
                    <textarea
                        className="w-full py-3 border-2 rounded-xl text-black"
                        placeholder="Enter the notification text"
                        value={formInput.notif}
                        id="notif"
                        name="notif"
                        onChange={onChangeHandler}
                    />
                </div>
                <button onClick={handleClick} className={`bg-[#8741dd] text-white hover:bg-gray-800 cursor-pointer py-2 px-8 transition-colors flex items-center justify-center rounded-full text-3xl ${buttonClicked ? "bg-gray-800 text-gray-300 scale-95" : ""
                    }`} type="submit">
                    <BiRightArrowAlt />
                </button>
            </form>
        </div>
    )
}

export default Body;
