import { useState } from "react";
import { Link } from "react-router";


export default function CardProduk() {
    const [carousel, setCarousel] = useState(1);
    const [PlusMinus, setPlusMinus] = useState(1);

    return (
        <>
            <section>
                <div className="lg:flex block md:p-3 justify-center gap-6">
                    <div>
                        <div className="flex justify-center items-center">
                            <img src="Images/produk-1.jpg" alt="" className="block w-[650px] object-cover rounded-sm" style={carousel === 1 ? {display: "block"} : { display: "none" }} />
                            <img src="Images/produk-2.jpeg" alt="" className="block w-[650px] object-cover rounded-sm" style={carousel === 2 ? {display: "block"} : { display: "none" }} />
                            <img src="Images/produk-3.jpg" alt="" className="block w-[650px] object-cover rounded-sm" style={carousel === 3 ? {display: "block"} : { display: "none" }} />
                        </div>
                        <div className="flex md:justify-center justify-around items-center gap-3 p-3">
                            <img src="Images/produk-1.jpg" alt="" className="w-[100px] object-cover rounded-sm" onClick={() => setCarousel(1) } />
                            <img src="Images/produk-2.jpeg" alt="" className="w-[100px] object-cover rounded-sm" onClick={() => setCarousel(2) } />
                            <img src="Images/produk-3.jpg" alt="" className="w-[100px] object-cover rounded-sm" onClick={() => setCarousel(3) } />
                        </div>
                    </div>
                    <div className="md:p-6">
                        <div className="py-5">
                            <h2 className="text-xl font-bold">Lorem ipsum dolor sit amet.</h2>
                            <p className="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, laborum aliquam!</p>
                            <div>
                                <span>O O O O O</span>
                                <span>4.5</span>
                            </div>
                        </div>
                        <div className="py-5">
                            <h2 className="text-lg font-semibold">Lorem ipsum dolor sit amet.</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, maiores!</p>
                        </div>
                        <div className="py-5">
                            <h2 className="font-semibold text-normal">Lorem ipsum dolor sit.</h2>
                            <div className="flex items-center p-3 gap-3">
                                <div className="w-[40px] border bg-black rounded-full">1</div>
                                <div className="w-[40px] border bg-black rounded-full">1</div>
                                <div className="w-[40px] border bg-black rounded-full">1</div>
                                <div className="w-[40px] border bg-black rounded-full">1</div>
                            </div>
                        </div>
                        <div className="flex items-center p-2 py-3">
                            <button className="w-[30px] text-lg text-center bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-l-full" onClick={() => setPlusMinus(PlusMinus - 1)}>-</button>
                            <button className="w-[30px] text-lg text-center bg-gray-200">{PlusMinus}</button>
                            <button className="w-[30px] text-lg text-center bg-gray-200 cursor-pointer hover:bg-gray-300 rounded-r-full" onClick={() => setPlusMinus(PlusMinus + 1)}>+</button>
                            <p className="mx-3">Lorem, ipsum.</p>
                        </div>
                        <div className="flex md:gap-3 bg-white justify-around md:justify-none lg:bg-none lg:p-1 py-3 items-center text-base fixed w-full bottom-0 md:static font-medium">
                            <button className="p-2 px-4 md:rounded-full md:order-1 order-3 bg-green-700 border cursor-pointer text-white hover:bg-green-500">Beli Sekarang</button>
                            <button className="p-2 px-4 md:rounded-full md:order-2 order-2 bg-white border-1 border-green-500 cursor-pointer hover:bg-green-500 hover:text-white text-green-500">Masukan Keranjang</button>
                            <button className="p-2 px-4 md:rounded-full md:order-3 order-1 bg-white border-1 border-green-500 cursor-pointer hover:bg-green-500 hover:text-white text-green-500">Chat Sekarang</button>
                        </div>
                    </div>
                </div>
                <div className="lg:flex p-3 lg:gap-3">
                    <div className="lg:w-[50%] my-4">
                        <h2 className="text-xl font-bold py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, molestias!</h2>
                        <p className="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae similique debitis facilis molestiae quidem dolores cumque doloribus! Officiis, quidem? Exercitationem, consequatur porro. Ipsum nulla neque excepturi eveniet omnis natus fugit!
                            Suscipit repellat maxime totam commodi obcaecati magni placeat atque repellendus? Id aliquid nobis in, iste voluptate perferendis sequi ipsa, veritatis, temporibus repudiandae suscipit ipsum quam rerum odio alias ducimus optio.</p>
                    </div>
                    <hr className="md:hidden" />
                    <div className="block lg:w-[50%]">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-bold">Review</h2>
                            <Link className="p-1 px-4 rounded-full hover:text-blue-800">Lihat selengkapnya</Link>
                        </div>
                        <div className="block bg-white shadow-md rounded-sm p-2 my-2">
                            <div className="flex gap-2 p-1 py-2">
                                <img src="Images/produk-1.jpg" className="w-[50px] h-[50px] rounded-full p-1" alt="profile" />
                                <div>
                                    <h2 className="text-base font-semibold">username</h2>
                                    <p className="text-sm">produk</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>O O O O O</span>
                                </div>
                                <p>
                                    produk apa ini produk gak jelas dijualin alah kontol kalau mau jualan yang jujur lah anjing
                                    dasar tidak amanah udah kosongin aja tuh toko
                                </p>
                            </div>
                        </div>
                        <div className="block bg-white shadow-md rounded-sm p-2 my-2">
                            <div className="flex gap-2 p-1 py-2">
                                <img src="Images/produk-1.jpg" className="w-[50px] h-[50px] rounded-full p-1" alt="profile" />
                                <div>
                                    <h2 className="text-base font-semibold">username</h2>
                                    <p className="text-sm">produk</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>O O O O O</span>
                                </div>
                                <p>
                                    produk apa ini produk gak jelas dijualin alah kontol kalau mau jualan yang jujur lah anjing
                                    dasar tidak amanah udah kosongin aja tuh toko
                                </p>
                            </div>
                        </div>
                        <div className="block bg-white shadow-md rounded-sm p-2 my-2">
                            <div className="flex gap-2 p-1 py-2">
                                <img src="Images/produk-1.jpg" className="w-[50px] h-[50px] rounded-full p-1" alt="profile" />
                                <div>
                                    <h2 className="text-base font-semibold">username</h2>
                                    <p className="text-sm">produk</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <span>O O O O O</span>
                                </div>
                                <p>
                                    produk apa ini produk gak jelas dijualin alah kontol kalau mau jualan yang jujur lah anjing
                                    dasar tidak amanah udah kosongin aja tuh toko
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <h2 className="text-lg font-bold py-3">Kategori Popular</h2>
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                        <Link to="/produk" className="block shadow-xl/20 rounded-sm">
                            <div className="">
                                <img src="/Images/produk-1.jpg" className="w-[500px] object-cover rounded-sm" alt="" />
                            </div>
                            <div className="flex p-3 justify-between items-end">
                                <div>
                                    <h2 className="font-medium p-1">Produk</h2>
                                    <h2 className="font-semibold p-1">RP16.000</h2>
                                </div>
                                <div className="">
                                    10rb+ terjual
                                </div>
                            </div>
                        </Link>
                        <Link to="/produk" className="block shadow-xl/20 rounded-sm">
                            <div className="">
                                <img src="/Images/produk-1.jpg" className="w-[500px] object-cover rounded-sm" alt="" />
                            </div>
                            <div className="flex p-3 justify-between items-end">
                                <div>
                                    <h2 className="font-medium p-1">Produk</h2>
                                    <h2 className="font-semibold p-1">RP16.000</h2>
                                </div>
                                <div className="">
                                    10rb+ terjual
                                </div>
                            </div>
                        </Link>
                        <Link to="/produk" className="block shadow-xl/20 rounded-sm">
                            <div className="">
                                <img src="/Images/produk-1.jpg" className="w-[500px] object-cover rounded-sm" alt="" />
                            </div>
                            <div className="flex p-3 justify-between items-end">
                                <div>
                                    <h2 className="font-medium p-1">Produk</h2>
                                    <h2 className="font-semibold p-1">RP16.000</h2>
                                </div>
                                <div className="">
                                    10rb+ terjual
                                </div>
                            </div>
                        </Link>
                        <Link to="/produk" className="block shadow-xl/20 rounded-sm">
                            <div className="">
                                <img src="/Images/produk-1.jpg" className="w-[500px] object-cover rounded-sm" alt="" />
                            </div>
                            <div className="flex p-3 justify-between items-end">
                                <div>
                                    <h2 className="font-medium p-1">Produk</h2>
                                    <h2 className="font-semibold p-1">RP16.000</h2>
                                </div>
                                <div className="">
                                    10rb+ terjual
                                </div>
                            </div>
                        </Link>
                        <Link to="/produk" className="block shadow-xl/20 rounded-sm">
                            <div className="">
                                <img src="/Images/produk-1.jpg" className="w-[500px] object-cover rounded-sm" alt="" />
                            </div>
                            <div className="flex p-3 justify-between items-end">
                                <div>
                                    <h2 className="font-medium p-1">Produk</h2>
                                    <h2 className="font-semibold p-1">RP16.000</h2>
                                </div>
                                <div className="">
                                    10rb+ terjual
                                </div>
                            </div>
                        </Link>
                        <Link to="/produk" className="block shadow-xl/20 rounded-sm">
                            <div className="">
                                <img src="/Images/produk-1.jpg" className="w-[500px] object-cover rounded-sm" alt="" />
                            </div>
                            <div className="flex p-3 justify-between items-end">
                                <div>
                                    <h2 className="font-medium p-1">Produk</h2>
                                    <h2 className="font-semibold p-1">RP16.000</h2>
                                </div>
                                <div className="">
                                    10rb+ terjual
                                </div>
                            </div>
                        </Link>
                        <Link to="/produk" className="block shadow-xl/20 rounded-sm">
                            <div className="">
                                <img src="/Images/produk-1.jpg" className="w-[500px] object-cover rounded-sm" alt="" />
                            </div>
                            <div className="flex p-3 justify-between items-end">
                                <div>
                                    <h2 className="font-medium p-1">Produk</h2>
                                    <h2 className="font-semibold p-1">RP16.000</h2>
                                </div>
                                <div className="">
                                    10rb+ terjual
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}