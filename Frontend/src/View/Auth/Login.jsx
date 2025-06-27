import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaCircleExclamation } from "react-icons/fa6";
import usersPresenter from "../../Presenters/usersPresenter";
import data from "../../Models/data";

export default function Login() {
    const [Loading, setLoading] = useState(false);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [responseMessage, setResponseMessage] = useState(null);
    const navigate = useNavigate();

    const presenter = new usersPresenter({
        model: new data(),
        view: {
            setLoading: setLoading,
            navigate: navigate,
            setResponseMessage: setResponseMessage
        }
    })

    async function handleSubmit(e) {
        e.preventDefault();
        await presenter.Login(username, password);
    }

    return (
        <>
            <div className="flex w-full h-dvh items-center justify-center">
                <div className="flex items-center gap-2 px-2">
                    <div className="w-md pb-5 p-5">
                        <div className="flex gap-2 items-center">
                            <img src="Images/logo.png" className="w-10 object-cover" alt="" />
                            <h2 className="text-xl font-semibold">BelanjaQu</h2>
                        </div>
                        <div className="p-5 text-md mt-2">
                            {responseMessage && responseMessage.status === "success" ?
                                <div className="flex items-center gap-1 text-green-600">
                                    <FaCircleExclamation />
                                    <span>{responseMessage?.message}</span>
                                </div> :
                                <></>}
                            <h1 className="text-center text-xl font-semibold py-3">Login</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="py-1">
                                    <label htmlFor="">Username</label>
                                    <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} className="w-full border-1 border-gray-400 p-1 my-2 px-2 rounded-md" />
                                    {responseMessage && responseMessage.status === "fail" ?
                                        <div className="flex items-center gap-1 text-red-600">
                                            <FaCircleExclamation />
                                            <span>{responseMessage?.message}</span>
                                        </div> :
                                        <></>}
                                </div>
                                <div className="py-1">
                                    <label htmlFor="">Password</label>
                                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} className="w-full border-1 border-gray-400 p-1 my-2 px-2 rounded-md" />
                                </div>
                                <button type="submit" className="w-full bg-blue-600 p-2 text-white cursor-pointer rounded-full my-2">Login</button>
                                <div className="w-full flex items-center gap-2 text-gray-400">
                                    <div className="border-t-1 w-full"></div>
                                    <span>or</span>
                                    <div className="border-t-1 w-full"></div>
                                </div>
                                <button className="flex items-center w-full border-1 border-gray-400 p-2 my-2 cursor-pointer rounded-full">
                                    <img src="Images/google.png" alt="logo google" className="w-[20px] h-[20px]" />
                                    <div className="w-full text-center">continue with google</div>
                                </button>
                                <div className="m-2 text-center">
                                    <span>If you have not account? <Link to="/register">Register</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img src="Images/E-Commerce.jpg" className="w-xl" alt="E-Commerce" />
                    </div>
                </div>
            </div>
        </>
    )
}