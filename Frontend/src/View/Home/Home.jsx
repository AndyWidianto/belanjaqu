import { useEffect, useState } from "react";
import { Link } from 'react-router';

export default function Home() {
    const [carousel, setCarousel] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            if (carousel >= 3) {
                setCarousel(1);
                return;
            }
            setCarousel(carousel + 1);
        }, 5000);
    });
    return (
        <>
            <section className="text-lg pt-22 z-99">
                <div >
                    <div className="flex overflow-hidden z-10">
                        <img src="/Images/carousel-1.jpg" className="aspect-4/1 object-cover animate-start" style={carousel === 1 ? { display: "block" } : { display: "none" }} alt="" />
                        <img src="/Images/carousel-2.jpg" className="aspect-4/1 object-cover animate-start" style={carousel === 2 ? { display: "block" } : { display: "none" }} alt="" />
                        <img src="/Images/carousel-3.jpg" className="aspect-4/1 object-cover animate-start" style={carousel === 3 ? { display: "block" } : { display: "none" }} alt="" />
                    </div>
                    <div className="flex gap-4 justify-center p-2">
                        <div className={`w-3 h-3 border bg-black rounded-full ${carousel === 1 ? 'bg-black' : 'bg-white'}`}></div>
                        <div className={`w-3 h-3 border bg-black rounded-full ${carousel === 2 ? 'bg-black' : 'bg-white'}`}></div>
                        <div className={`w-3 h-3 border bg-black rounded-full ${carousel === 3 ? 'bg-black' : 'bg-white'}`}></div>
                    </div>
                    <div>
                        <div className="p-3">
                            <h2 className="font-semibold">Rekomdendasi BaseSaller</h2>
                            <div className="overflow-x-scroll p-4">
                                <div className="flex gap-4">
                                    <Link to="/produk" className="block shrink-0 shadow-xl rounded-sm">
                                        <div>
                                            <img src="/Images/produk-1.jpg" alt="" />
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
                        </div>
                    </div>
                    <div className="p-3">
                        <h2 className="font-semibold">For you</h2>
                        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-between p-2">
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
                </div>
            </section>
        </>
    )
}