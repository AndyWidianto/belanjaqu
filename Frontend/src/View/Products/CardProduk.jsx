import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import data from "../../Models/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MessageCircleMore, Minus, Plus, Share2, Star } from "lucide-react";


export default function CardProduk() {
    const [carousel, setCarousel] = useState(1);
    const [PlusMinus, setPlusMinus] = useState(1);

    const imageProduct = [
        "https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg",
        "https://kreasijabar.id/uploads/ekraf_products/16eff125d0be6bbd01dbdddf0c163e20.png",
        "https://storage.hpaindonesia.net:8215/assets/2c4609512012277eb0ce20c107efe462/56c022317169267ff8c2b07565b83fda.jpg"
    ]
    const navigate = useNavigate();

    const model = new data();
    async function handleShopping() {
        try {
            const res = await model.getCookie();
            console.log(res);
            navigate("/payment");
        } catch (err) {
            navigate("/login");
        }
    }
    return (
        <>
            <section>
                <div className="lg:flex block md:p-3 justify-center gap-6">
                    <div className="flex gap-2 w-full">
                        <div className="w-full overflow-hidden">
                            <img src={imageProduct[carousel]} alt="" className="block w-150 h-150 object-cover rounded-sm transition duration-500 hover:scale-104" />
                        </div>
                        <div className="flex flex-col justify-start items-center order-1 gap-3 p-3">
                            {imageProduct.map((value, index) => (
                                <img src={value} alt="" className="w-20 h-20 object-content rounded-sm" onClick={(e) => setCarousel(index)} />
                            ))}
                        </div>
                    </div>
                    <div className="md:p-6 w-full">
                        <div className="py-5">
                            <h2 className="text-5xl font-bold p-2 text-center">Keripik pisang rasa rumput laut</h2>
                            <div className="flex items-center text-sm gap-2 p-2">
                                <div className="flex gap-2 items-center">
                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    <Star className="w-5 h-5 text-gray-600" />
                                </div>
                                <span>4.5</span>
                                <div className="text-gray-600">(124 ulasan)</div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-blue-500 p-2 py-4">Rp.20.000</h2>
                                <p className="text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sit labore, suscipit in cupiditate laboriosam, delectus fuga magnam a laudantium repellendus eveniet recusandae consequuntur. Error reiciendis similique quae explicabo porro.
                                    Laudantium numquam necessitatibus quae tempore aperiam eius odit accusamus optio incidunt animi, ullam, eveniet unde asperiores id itaque iure architecto deserunt cumque sit, quibusdam provident. Iusto reprehenderit saepe quaerat illo.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 p-2 py-3">
                            <div className="border-1 border-gray-200 rounded-md">
                                <button className="p-2 px-3 bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-sm" onClick={() => setPlusMinus(PlusMinus - 1 < 0 ? 0 : PlusMinus - 1)}>
                                    <Minus className="w-4 h-4" />
                                </button>
                                <button className="w-[30px] text-lg text-center">{PlusMinus}</button>
                                <button className="p-2 px-3 bg-gray-100 cursor-pointer hover:bg-gray-200 rounded-sm" onClick={() => setPlusMinus(PlusMinus + 1)}>
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>
                            <p className="text-sm text-gray-600">Stock: 47 tersedia</p>
                        </div>
                        <div className="p-2">
                            <div className="flex items-center gap-2 py-2">
                                <button className="w-full bg-blue-600 rounded-md p-2 text-gray-100">Tambah ke Keranjang</button>
                                <button className="p-2 px-3 bg-gray-200 rounded-md"><MessageCircleMore /></button>
                                <button className="p-2 px-3 bg-gray-200 rounded-md"><Share2 /></button>
                            </div>
                            <button className="w-full p-2 rounded-md bg-orange-600 text-gray-100" onClick={handleShopping}>Beli Sekarang</button>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 items-center px-5 p-3 text-lg border-b-1 border-gray-400">
                    <NavLink end to="/product" className={({ isActive }) => isActive ? "text-blue-600 font-semibold border-1 border-blue-600 rounded-md" : ""} >
                        <div className="p-1 px-5 border-1 border-gray-200 bg-gray-200 rounded-md shadow-md hover:border-blue-600">
                            Deskripsi
                        </div>
                    </NavLink>
                    <NavLink end to="/product/review" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""} >
                        <div className="p-1 px-5 border-1 border-gray-200 bg-gray-200 rounded-md shadow-md hover:border-blue-600">
                            Ulasan
                        </div>
                    </NavLink>
                </div>
                <Outlet />
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