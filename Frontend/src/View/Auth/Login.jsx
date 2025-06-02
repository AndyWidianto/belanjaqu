
export default function Login() {

    return (
        <>
        <div className="flex w-full h-140 items-center justify-center">
            <div className="flex items-center gap-2 px-2">
                <div className="w-md pb-10 p-5 shadow-sm">
                    <div className="flex gap-2 items-center">
                        <img src="Images/logo.png" className="w-10 object-cover" alt="" />
                        <h2 className="text-xl font-semibold">BelanjaQu</h2>
                    </div>
                    <div className="p-5 text-lg mt-2">
                        <h1 className="text-center text-xl font-semibold py-3">Login</h1>
                        <form>
                            <div className="py-3">
                                <label htmlFor="">Username</label>
                                <input type="text" name="" id="" className="w-full outline-1 p-1 my-2 px-2 rounded-md" />
                            </div>
                            <div className="py-3">
                                <label htmlFor="">Password</label>
                                <input type="password" name="" id="" className="w-full outline-1 p-1 my-2 px-2 rounded-md" />
                            </div>
                            <button type="submit" className="w-full bg-blue-600 p-1 text-white rounded-md my-2">Login</button>
                            <div className="w-full text-center text-md text-gray-400">or</div>
                            <button className="w-full bg-orange-400 p-1 my-2 text-white rounded-md">Google</button>
                            <div className="text-md m-2 text-center">
                                <span>If you have not account? <a href="">Register</a></span>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <img src="Images/E-Commerce.jpg" className="w-xl" alt="E-Commerce" />
                </div>
            </div>
        </div>
        </>
    )
}