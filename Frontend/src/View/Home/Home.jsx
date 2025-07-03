import { useEffect, useState } from "react";
import { Link } from 'react-router';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HomePresenter from "../../Presenters/HomePresenter";
import data from "../../Models/data";

export default function Home() {
    const [products, setProducts] = useState(null);

    const presenter = new HomePresenter({
        model: new data(),
        view: {
            setProducts: setProducts
        }
    })

    const images = [
        '/Images/carousel-1.png',
        '/Images/carousel-2.png',
        '/Images/carousel-3.png'
    ]

    useEffect(() => {
        presenter.getProducts();
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
                            <h2 className="text-2xl font-bold py-3">Produk Populer</h2>
                            <p className="text-sm text-gray-600">Produk terlaris minggu ini</p>
                            <div className="overflow-x-scroll p-4">
                                <div className="flex items-center gap-4">
                                    {products?.map(value => (
                                        <Link to="/product" className="block w-70 h-70 shrink-0 bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg" key={value.product_id}>
                                            <img src={value.images_products[0]?.image} className="w-full object-cover rounded-sm" alt="" />
                                            <div className="flex p-3 justify-between items-end">
                                                <div>
                                                    <h2 className="font-medium p-1">{value.name}</h2>
                                                    <h2 className="font-semibold p-1">RP{value.price}</h2>
                                                </div>
                                                <div className="text-sm">
                                                    10rb+ terjual
                                                </div>
                                            </div>
                                        </Link>
                                    )).slice(0, 9)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10">
                        <h2 className="font-semibold">For you</h2>
                        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] gap-4 p-2">
                            {products?.map(value => (
                                <Link to="/product" className="block bg-white overflow-hiddden border-1 border-gray-200 rounded-lg transition duration-300 linear transform hover:translate-y-[-4px] hover:shadow-lg">
                                <img src={value.images_products[0]?.image} className="w-full object-cover rounded-sm" alt="" />
                                <div className="flex p-3 justify-between items-end">
                                    <div>
                                        <h2 className="font-medium p-1">{value.name}</h2>
                                        <h2 className="font-semibold p-1">RP{value.price}</h2>
                                    </div>
                                    <div className="text-sm">
                                        10rb+ terjual
                                    </div>
                                </div>
                            </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}