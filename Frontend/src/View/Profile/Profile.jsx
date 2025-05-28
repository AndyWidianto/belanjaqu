import { Link, Outlet } from "react-router";


export default function Profile() {

    return (
        <>
            <section>
                <div>
                    <div>
                        <img src="Images/carousel-1.jpg" className="w-full aspect-4/1 object-cover" alt="image" />
                    </div>
                    <div className="p-3 flex justify-between">
                        <div className="flex gap-3">
                            <img src="Images/produk-1.jpg" alt="profile" className="relative bottom-20 w-50 h-50 rounded-full object-cover" />
                            <div>
                                <h2 className="text-xl my-1 font-bold">Username anda</h2>
                                <p>Toko: Kelontong</p>
                                <p>Alamat: Lorem ipsum dolor sit amet consectetur.</p>
                                <p>Desrkipsi singkat tentang toko Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="px-20">
                            <div className="flex gap-3 justify-end">
                                <button className="p-1 px-4 text-lg bg-black text-white rounded-md">+ Follow</button>
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
                <div className="p-3 flex">
                    <div className="p-5 text-base font-medium">
                        <ul className="flex lg:block">
                            <li className="my-4">
                                <Link to='/profile' className="hover:text-blue-800 p-1 pr-20 px-4 border">Media</Link>
                            </li>
                            <li className="my-4">
                                <Link to='/profile/produk' className="hover:text-blue-800 pr-20 p-1 px-4 border">Produk</Link>
                            </li>
                            <li className="my-4">
                                <Link to='/profile' className="hover:text-blue-800 p-1 pr-20 px-4 border">Settings</Link>
                            </li>
                        </ul>
                    </div>
                    <Outlet />
                </div>
            </section>
        </>
    )
}