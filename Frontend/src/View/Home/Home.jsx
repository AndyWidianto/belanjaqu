import { useEffect, useState } from "react";
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {

    const images = [
        '/Images/carousel-1.png',
        '/Images/carousel-2.png',
        '/Images/carousel-3.png'
    ]

    useEffect(() => {
    }, []);
    return (
        <>
            <section className="lg:text-lg text-md z-99 bg-gray-100">
                <div>
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                    >
                        {images.map(value =>
                            <SwiperSlide><img src={value} alt="carousel" className="aspect-4/1 object-cover" /></SwiperSlide>
                        )}
                    </Swiper>
                    <div>
                        <div className="p-10">
                            <h2 className="text-2xl font-bold py-3">Kategori Produk</h2>
                            <p className="text-sm text-gray-700">Temukan produk sesuai kebutuhan anda</p>
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,_1fr))] gap-5 py-5">
                                <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear hover:scale-102 hover:shadow-sm">
                                    <div className="text-4xl pb-8">🎧</div>
                                    <h2 className="text-base font-bold py-1">Headphone</h2>
                                    <p className="text-sm text-gray-500">1.234rb produk</p>
                                </div>
                                <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear transform hover:translate-y-[-2px] hover:shadow-sm">
                                    <div className="text-4xl pb-8">🎧</div>
                                    <h2 className="text-base font-bold py-1">Headphone</h2>
                                    <p className="text-sm text-gray-500">1.234rb produk</p>
                                </div>
                                <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear transform hover:translate-y-[-2px] hover:shadow-sm">
                                    <div className="text-4xl pb-8">🎧</div>
                                    <h2 className="text-base font-bold py-1">Headphone</h2>
                                    <p className="text-sm text-gray-500">1.234rb produk</p>
                                </div>
                                <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear transform hover:translate-y-[-2px] hover:shadow-sm">
                                    <div className="text-4xl pb-8">🎧</div>
                                    <h2 className="text-base font-bold py-1">Headphone</h2>
                                    <p className="text-sm text-gray-500">1.234rb produk</p>
                                </div>
                                <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear transform hover:translate-y-[-2px] hover:shadow-sm">
                                    <div className="text-4xl pb-8">🎧</div>
                                    <h2 className="text-base font-bold py-1">Headphone</h2>
                                    <p className="text-sm text-gray-500">1.234rb produk</p>
                                </div>
                                <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear transform hover:translate-y-[-2px] hover:shadow-sm">
                                    <div className="text-4xl pb-8">🎧</div>
                                    <h2 className="text-base font-bold py-1">Headphone</h2>
                                    <p className="text-sm text-gray-500">1.234rb produk</p>
                                </div>
                                <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear transform hover:translate-y-[-2px] hover:shadow-sm">
                                    <div className="text-4xl pb-8">🎧</div>
                                    <h2 className="text-base font-bold py-1">Headphone</h2>
                                    <p className="text-sm text-gray-500">1.234rb produk</p>
                                </div>
                                <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear transform hover:translate-y-[-2px] hover:shadow-sm">
                                    <div className="text-4xl pb-8">🎧</div>
                                    <h2 className="text-base font-bold py-1">Headphone</h2>
                                    <p className="text-sm text-gray-500">1.234rb produk</p>
                                </div>
                                <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear transform hover:translate-y-[-2px] hover:shadow-sm">
                                    <div className="text-4xl pb-8">🎧</div>
                                    <h2 className="text-base font-bold py-1">Headphone</h2>
                                    <p className="text-sm text-gray-500">1.234rb produk</p>
                                </div>
                                <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear transform hover:translate-y-[-2px] hover:shadow-sm">
                                    <div className="text-4xl pb-8">🎧</div>
                                    <h2 className="text-base font-bold py-1">Headphone</h2>
                                    <p className="text-sm text-gray-500">1.234rb produk</p>
                                </div>
                                <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear transform hover:translate-y-[-2px] hover:shadow-sm">
                                    <div className="text-4xl pb-8">🎧</div>
                                    <h2 className="text-base font-bold py-1">Headphone</h2>
                                    <p className="text-sm text-gray-500">1.234rb produk</p>
                                </div>
                                <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear transform hover:translate-y-[-2px] hover:shadow-sm">
                                    <div className="text-4xl pb-8">🎧</div>
                                    <h2 className="text-base font-bold py-1">Headphone</h2>
                                    <p className="text-sm text-gray-500">1.234rb produk</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-10">
                            <h2 className="text-2xl font-bold py-3">Produk Populer</h2>
                            <p className="text-sm text-gray-600">Produk terlaris minggu ini</p>
                            <div className="overflow-x-scroll p-4">
                                <div className="grid grid-flow-col grid-rows-1 gap-4">
                                    <Link to="/product" className="block w-60 bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                        <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                        <div className="flex p-3 justify-between items-end">
                                            <div>
                                                <h2 className="font-medium p-1">Produk</h2>
                                                <h2 className="font-semibold p-1">RP16.000</h2>
                                            </div>
                                            <div className="text-sm">
                                                10rb+ terjual
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/product" className="block w-60 bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                        <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                        <div className="flex p-3 justify-between items-end">
                                            <div>
                                                <h2 className="font-medium p-1">Produk</h2>
                                                <h2 className="font-semibold p-1">RP16.000</h2>
                                            </div>
                                            <div className="text-sm">
                                                10rb+ terjual
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/product" className="block w-60 bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                        <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                        <div className="flex p-3 justify-between items-end">
                                            <div>
                                                <h2 className="font-medium p-1">Produk</h2>
                                                <h2 className="font-semibold p-1">RP16.000</h2>
                                            </div>
                                            <div className="text-sm">
                                                10rb+ terjual
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/product" className="block w-60 bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                        <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                        <div className="flex p-3 justify-between items-end">
                                            <div>
                                                <h2 className="font-medium p-1">Produk</h2>
                                                <h2 className="font-semibold p-1">RP16.000</h2>
                                            </div>
                                            <div className="text-sm">
                                                10rb+ terjual
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/product" className="block w-60 bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                        <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                        <div className="flex p-3 justify-between items-end">
                                            <div>
                                                <h2 className="font-medium p-1">Produk</h2>
                                                <h2 className="font-semibold p-1">RP16.000</h2>
                                            </div>
                                            <div className="text-sm">
                                                10rb+ terjual
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="/product" className="block w-60 bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                        <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                        <div className="flex p-3 justify-between items-end">
                                            <div>
                                                <h2 className="font-medium p-1">Produk</h2>
                                                <h2 className="font-semibold p-1">RP16.000</h2>
                                            </div>
                                            <div className="text-sm">
                                                10rb+ terjual
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/product" className="block w-60 bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                        <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                        <div className="flex p-3 justify-between items-end">
                                            <div>
                                                <h2 className="font-medium p-1">Produk</h2>
                                                <h2 className="font-semibold p-1">RP16.000</h2>
                                            </div>
                                            <div className="text-sm">
                                                10rb+ terjual
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/product" className="block w-60 bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                        <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                        <div className="flex p-3 justify-between items-end">
                                            <div>
                                                <h2 className="font-medium p-1">Produk</h2>
                                                <h2 className="font-semibold p-1">RP16.000</h2>
                                            </div>
                                            <div className="text-sm">
                                                10rb+ terjual
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/product" className="block w-60 bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                        <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                        <div className="flex p-3 justify-between items-end">
                                            <div>
                                                <h2 className="font-medium p-1">Produk</h2>
                                                <h2 className="font-semibold p-1">RP16.000</h2>
                                            </div>
                                            <div className="text-sm">
                                                10rb+ terjual
                                            </div>
                                        </div>
                                    </Link>
                                    <Link to="/product" className="block w-60 bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                        <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                        <div className="flex p-3 justify-between items-end">
                                            <div>
                                                <h2 className="font-medium p-1">Produk</h2>
                                                <h2 className="font-semibold p-1">RP16.000</h2>
                                            </div>
                                            <div className="text-sm">
                                                10rb+ terjual
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10">
                        <h2 className="font-semibold">For you</h2>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] gap-4 p-2">
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src="https://forestamart.bp2sdm.menlhk.go.id/assets/images/produk/keripik-pisang-madu-varian-original-100-gram-_984_20240619132529.jpeg" className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">Produk</h2>
                                        <h2 className="font-semibold p-1">RP16.000</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}