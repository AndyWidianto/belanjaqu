import { FaSearch, FaPaperPlane, FaEllipsisV } from "react-icons/fa"
export default function Chatting() {

    return (
        <>
            <section className="grid grid-cols-[400px_1fr] gap-2">
                <div className="p-1">
                    <div className="fixed h-full w-[400px] overflow-y-scroll">
                        <div className="fixed w-[400px] bg-white px-2 pt-2">
                            <div className="flex border-1 border-gray-600 rounded-full">
                                <input type="text" name="" id="" className="w-[90%] p-2 text-md outline-0" />
                                <button className=""><FaSearch /></button>
                            </div>
                        </div>
                        <div className="py-7"></div>
                        <div className="flex items-center px-2 border-b-1 py-1 hover:bg-gray-200 border-gray-500">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="w-[250px] font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                            <div className="block text-center border">
                                <span className="text-center">4</span>
                            </div>
                        </div>
                        <div className="flex items-center px-2 py-1 border-b-1 border-gray-500 hover:bg-gray-200">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="w-[250px] font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                            <div className="block text-center border">
                                <span className="text-center">4</span>
                            </div>
                        </div>
                        <div className="flex items-center px-2 py-1 hover:bg-gray-200 border-b-1 border-gray-500">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="w-[250px] font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                            <div className="block text-center border">
                                <span className="text-center">4</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full flex flex-col p-1 m-0">
                    <div className="flex justify-between items-center border rounded-sm">
                        <div className="flex items-center gap-2">
                            <div className="p-2">
                                <img src="Images/produk-1.jpg" className="w-[50px] h-[50px] rounded-full" alt="" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold">Username</h2>
                                <p>Online</p>
                            </div>
                        </div>
                        <div className="text-lg font-bold p-3 px-4">
                            <span><FaEllipsisV /> </span>
                        </div>
                    </div>
                    <div className="w-full h-[460px] p-2">
                        <div>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut consectetur quidem nam sint deleniti, quia adipisci repudiandae delectus tempora esse corporis exercitationem, soluta voluptate minus ullam eum harum enim dolor!
                        </div>
                    </div>
                    <div className="px-1">
                        <form>
                            <div className="flex items-center gap-2 border-1 border-gray-600 rounded-full w-full px-4">
                                <input type="text" name="message" id="message" className="p-1 text-md w-full outline-0" />
                                <button type="submit" className="py-2 px-2 hover:text-blue-600 cursor-pointer"><FaPaperPlane /></button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}