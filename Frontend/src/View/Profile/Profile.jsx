import { Link, Outlet } from "react-router";
import { FaPlus } from 'react-icons/fa6';
import { FaEdit, FaPen } from "react-icons/fa";
import EditProfile from "./Edit";


export default function Profile() {

    return (
        <>
            <section>
                <div>
                    <div>
                        <img src="Images/carousel-1.jpg" className="w-full aspect-4/1 object-cover" alt="image" />
                        <div className="flex justify-end text-md md:text-lg lg:text-xl w-full font-semibold">
                            <div className="relative bottom-9 lg:bottom-12 bg-gray-100 rounded-full border-1 lg:p-3 p-2 border-gray-200"><FaPen /></div>
                        </div> 
                    </div>
                    <div className="p-3 block lg:flex items-center lg:justify-between relative bottom-20 md:bottom-10">
                        <div className="lg:flex items-start block lg:gap-3">
                            <div className="flex items-start">
                                <img src="Images/produk-1.jpg" alt="profile" className="relative bottom-0 md:bottom-25 lg:bottom-35 w-15 h-15 md:w-30 md:h-30 lg:w-50 lg:h-50 shrink-0 rounded-full object-cover border-3 border-white z-10" />
                            </div>
                            <div className="">
                                <h2 className="text-xl lg:my-1 font-bold">Username anda</h2>
                                <p>Toko: Kelontong</p>
                                <p>Alamat: Lorem ipsum dolor sit amet consectetur.</p>
                                <p>Desrkipsi singkat tentang toko Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="lg:px-20">
                            <div className="flex gap-3 w-full justify-end p-3 lg:p-0">
                                <Link to="/add-product" className="flex items-center gap-1 p-1 px-4 lg:text-lg text-md border-1 border-gray-400 text-black rounded-md"><FaPlus /> product</Link>
                                <button className="flex items-center gap-1 p-1 px-4 lg:text-lg text-md bg-black text-white rounded-md"><FaPlus /> Follow</button>
                            </div>
                            <div className="flex gap-20 items-center my-6 justify-around">
                                <div>
                                    <p>Followers</p>
                                    <h2 className="text-xl font-bold">11,000</h2>
                                </div>
                                <div>
                                    <p>Following</p>
                                    <h2 className="text-xl font-bold">555</h2>
                                </div>
                                <div>
                                    <p>Likes</p>
                                    <h2 className="text-xl font-bold">11,000</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3 block lg:flex">
                    <div className="lg:p-5 text-base font-medium">
                        <ul className="flex lg:block">
                            <li className="lg:my-4">
                                <Link to='/profile' className="hover:text-blue-800 p-1 lg:pr-20 px-4">Media</Link>
                            </li>
                            <li className="lg:my-4">
                                <Link to='/profile/produk' className="hover:text-blue-800 lg:pr-20 p-1 px-4">Produk</Link>
                            </li>
                        </ul>
                    </div>
                    <Outlet />
                </div>
            </section>
        </>
    )
}