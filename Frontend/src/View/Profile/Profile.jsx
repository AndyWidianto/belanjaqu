import { Link, Outlet } from "react-router";
import { FaPlus } from 'react-icons/fa6';
import { Pen, SquarePen, Truck } from "lucide-react";
import { useState } from "react";


export default function Profile() {

    return (
        <>
            <section className="bg-gray-100">
                <div>
                    <div className="relative pb-3">
                        <img src="Images/E-Commerce.jpg" className="w-full aspect-4/1 object-cover" alt="image" />
                        <div className="flex justify-end relative text-md md:text-lg lg:text-xl w-full font-semibold">
                            <div className="absolute bottom-0 right-0 bg-gray-100 rounded-full p-2 text-gray-600"><SquarePen className="w-5 h-5" /></div>
                        </div>
                        <div className="flex absolute bottom-0 w-20 h-20 md:w-40 md:h-40 lg:w-50 lg:h-50 mx-3 border-4 border-white rounded-full">
                            <div className="relative w-full h-full">
                                <img src="Images/gambar_saya.jpg" alt="profile" className="absolute left-0 bottom-0 z-5 w-full h-full object-cover rounded-full" />
                                <button className="flex items-center gap-1 absolute bottom-0 right-6 z-10 p-1 px-2 bg-gray-100 text-gray-00 border-1 border-gray-500 text-sm rounded-md"><Pen className="w-4 h-4" /><span>Edit</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="p-3 block lg:flex items-center lg:justify-between">
                        <div className="lg:flex items-start block lg:gap-3">
                            <div className="">
                                <h2 className="text-xl lg:my-1 font-bold">Username anda</h2>
                                <p>Toko: Kelontong</p>
                                <p>Alamat: Lorem ipsum dolor sit amet consectetur.</p>
                                <p>Desrkipsi singkat tentang toko Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="lg:px-20">
                            <div className="flex gap-3 w-full justify-end p-3 py-5 lg:p-0">
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
                            <div className="flex items-center justify-around text-gray-600">
                                <button><Truck className="w-6 h-6" /></button>
                                <button><Truck className="w-6 h-6" /></button>
                                <button><Truck className="w-6 h-6" /></button>
                                <button><Truck className="w-6 h-6" /></button>
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