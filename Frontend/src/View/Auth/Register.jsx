import { Link } from "react-router";

export default function Register() {

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
                        <h1 className="text-center text-xl font-semibold py-3">Create Account</h1>
                        <form>
                            <div>
                                <label htmlFor="">Username</label>
                                <input type="text" name="" id="" className="w-full border-1 border-gray-400 p-1 my-2 px-3 rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="">Password</label>
                                <input type="password" name="" id="" className="w-full border-1 border-gray-400 p-1 my-2 px-3 rounded-md" />
                            </div>
                            <div>
                                <label htmlFor="">Confirm Password</label>
                                <input type="password" name="" id="" className="w-full border-1 border-gray-400 p-1 my-2 px-3 rounded-md" />
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
                                <span>If you have account? <Link to="/login">Login</Link></span>
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