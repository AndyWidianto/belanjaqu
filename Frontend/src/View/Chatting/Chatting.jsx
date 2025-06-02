import { FaSearch, FaPaperPlane, FaEllipsisV } from "react-icons/fa"
import { Link, useLocation } from "react-router"
export default function Chatting() {
    const location = useLocation();

    return (
        <>
            <section className="grid md:grid-cols-[360px_1fr] grid-cols-1">
                <div className="p-1">
                    <div className="h-full md:w-[360px] w-full fixed h-full overflow-y-scroll p-2 border-r-1 border-gray-300">
                        <div className="fixed md:w-[340px] w-full  top-0 px-5 pt-2 bg-white">
                            <div className="flex border-1 border-gray-600 rounded-full">
                                <input type="text" name="search" id="search" className="w-[90%] p-2 text-md outline-0" />
                                <button className=""><FaSearch /></button>
                            </div>
                        </div>
                        <div className="py-7"></div>
                        <Link to={`/message?andy`} className="flex items-center px-2 border-b-1 py-1 hover:bg-gray-200 border-gray-500">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="md:w-[250px] custom-media-w-300 custom-media-w-400 font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                        </Link>
                        <div className="flex items-center px-2 border-b-1 py-1 hover:bg-gray-200 border-gray-500">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="md:w-[250px] custom-media-w-300 custom-media-w-400 font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                        </div>
                        <div className="flex items-center px-2 border-b-1 py-1 hover:bg-gray-200 border-gray-500">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="md:w-[250px] custom-media-w-300 custom-media-w-400 font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                        </div>
                        <div className="flex items-center px-2 border-b-1 py-1 hover:bg-gray-200 border-gray-500">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="md:w-[250px] custom-media-w-300 custom-media-w-400 font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                        </div>
                        <div className="flex items-center px-2 border-b-1 py-1 hover:bg-gray-200 border-gray-500">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="md:w-[250px] custom-media-w-300 custom-media-w-400 font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                        </div>
                        <div className="flex items-center px-2 border-b-1 py-1 hover:bg-gray-200 border-gray-500">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="md:w-[250px] custom-media-w-300 custom-media-w-400 font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                        </div>
                        <div className="flex items-center px-2 border-b-1 py-1 hover:bg-gray-200 border-gray-500">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="md:w-[250px] custom-media-w-300 custom-media-w-400 font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                        </div>
                        <div className="flex items-center px-2 border-b-1 py-1 hover:bg-gray-200 border-gray-500">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="md:w-[250px] custom-media-w-300 custom-media-w-400 font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                        </div>
                        <div className="flex items-center px-2 border-b-1 py-1 hover:bg-gray-200 border-gray-500">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="md:w-[250px] custom-media-w-300 custom-media-w-400 font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                        </div>
                        <div className="flex items-center px-2 border-b-1 py-1 hover:bg-gray-200 border-gray-500">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="md:w-[250px] custom-media-w-300 custom-media-w-400 font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                        </div>
                        <div className="flex items-center px-2 border-b-1 py-1 hover:bg-gray-200 border-gray-500">
                            <div>
                                <img src="Images/produk-3.jpg" className="w-[40px] h-[40px] rounded-full object-cover m-2" alt="" />
                            </div>
                            <div>
                                <h2 className="font-semibold text-md">Lorem ipsum dolor sit.</h2>
                                <p className="md:w-[250px] custom-media-w-300 custom-media-w-400 font-base text-md truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-full flex-col w-full m-0 hidden md:flex">
                    <div className="flex justify-between items-center bg-white border-b-1 border-gray-300">
                        <div className="flex items-center gap-2">
                            <div className="p-2">
                                <img src="Images/produk-1.jpg" className="w-[40px] h-[40px] rounded-full" alt="" />
                            </div>
                            <div>
                                <h2 className="text-md font-semibold">Username</h2>
                                <p>Online</p>
                            </div>
                        </div>
                        <div className="text-lg font-bold p-3 px-4">
                            <span><FaEllipsisV /> </span>
                        </div>
                    </div>
                    <div className="w-full h-[85vh] p-1 px-5 overflow-x-scroll">
                        <ul>
                            <li className="flex w-full justify-start my-1">
                                <div className="px-2 py-1 rounded-r-xl rounded-b-xl lg:w-xl bg-gray-200">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi facilis nobis sit quasi, natus nesciunt, velit iusto dolore quae totam rerum, ab neque sint assumenda molestias? Deserunt quam praesentium eos?</p>
                                </div>
                            </li>
                            <li className="flex w-full justify-end my-1">
                                <div className="px-2 py-1 rounded-l-xl rounded-b-xl lg:w-xl bg-blue-200">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam cumque quaerat laudantium odit, quam repellendus aliquid consequuntur voluptas saepe in ullam maiores, minima deserunt vero voluptatum iste sint amet.</p>
                                </div>
                            </li>
                            <li className="flex w-full justify-start my-1">
                                <div className="px-2 py-1 rounded-r-xl rounded-b-xl w-sm md:w-md lg:w-xl bg-gray-200">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi facilis nobis sit quasi, natus nesciunt, velit iusto dolore quae totam rerum, ab neque sint assumenda molestias? Deserunt quam praesentium eos?</p>
                                </div>
                            </li>
                            <li className="flex w-full justify-end my-1">
                                <div className="px-2 py-1 rounded-l-xl rounded-b-xl w-sm md:w-md lg:w-xl bg-blue-200">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam cumque quaerat laudantium odit, quam repellendus aliquid consequuntur voluptas saepe in ullam maiores, minima deserunt vero voluptatum iste sint amet.</p>
                                </div>
                            </li>
                            <li className="flex w-full justify-start my-1">
                                <div className="px-2 py-1 rounded-r-xl rounded-b-xl w-sm md:w-md lg:w-xl bg-gray-200">
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi facilis nobis sit quasi, natus nesciunt, velit iusto dolore quae totam rerum, ab neque sint assumenda molestias? Deserunt quam praesentium eos?</p>
                                </div>
                            </li>
                            <li className="flex w-full justify-end my-1">
                                <div className="px-2 py-1 rounded-l-xl rounded-b-xl w-sm md:w-md lg:w-xl bg-blue-200">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam cumque quaerat laudantium odit, quam repellendus aliquid consequuntur voluptas saepe in ullam maiores, minima deserunt vero voluptatum iste sint amet.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex bottom-0 fixed w-[74%] border-1 border-gray-300 ml-[2px]">
                        <form className="w-full">
                            <div className="flex items-center gap-2 w-full px-4">
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