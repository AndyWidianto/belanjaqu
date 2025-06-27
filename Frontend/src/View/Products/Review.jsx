import { Ellipsis, Flag, Share, Star, ThumbsDown, ThumbsUp } from "lucide-react";
import { FaStar, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { Link } from "react-router";

export default function ReviewProduct() {

    return (
        <div className="flex flex-col gap-2 bg-gray-200">
            <div className="p-2 rounded-md bg-white shadow-md m-2">
                <div className="flex items-center gap-2 px-2">
                    <img src="/Images/profile1.png" alt="" className="w-12 h-12 object-cover rounded-full" />
                    <div className="w-full">
                        <h2 className="font-semibold">Sarah Jhonshon</h2>
                        <div>
                            <span className="text-sm text-gray-600">12 pembelian</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 px-3 bg-gray-100 rounded-md border-1 border-gray-100 hover:border-blue-500"><Share className="w-5 h-5" /></button>
                        <button className="p-2 px-3 bg-gray-100 rounded-md border-1 border-gray-100 hover:border-blue-500"><Flag className="w-5 h-5" /></button>
                        <button className="p-2 px-3 bg-gray-100 rounded-md border-1 border-gray-100 hover:border-blue-500"><Ellipsis className="w-5 h-5" /></button>
                    </div>
                </div>
                <div className="flex items-center gap-2 p-2">
                    <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="text-gray-400 text-sm">
                        20 Juli 2024
                    </div>
                </div>
                <div className="p-2">
                    <h2 className="text-xl text-center font-semibold">Bagus tapi agak kecil</h2>
                    <div className="flex items-center gap-3 text-sm text-gray-500 py-2">
                        <p>Ukuran: <span className="font-semibold text-black">L</span></p>
                        <p>Warna: <span className="font-semibold text-black">Black</span></p>
                    </div>
                    <p className="text-gray-500 text-base py-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi molestias doloremque eum dolores. Repellendus deleniti provident dicta laudantium porro, numquam libero ullam quas, at earum dolore nemo sed nesciunt.
                    </p>
                </div>
                <div className="flex items-center gap-4 p-4 border-t-1 border-gray-200">
                    <button className="flex items-center gap-1 text-sm text-gray-700 border-1 border-gray-100 hover:border-blue-500 p-2 px-3 bg-gray-100 rounded-md">
                        <ThumbsUp className="w-4 h-4" />
                        <span>Membantu (15)</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-700 border-1 border-gray-100 hover:border-blue-500 p-2 px-3 bg-gray-100 rounded-md">
                        <ThumbsDown className="w-4 h-4" />
                        <span>Tidak Membantu</span>
                    </button>
                    <button className="text-blue-600 p-2 px-3 bg-gray-100 rounded-md border-1 border-gray-100 hover:border-blue-500 ml-auto">Balas</button>
                </div>
            </div>
            <div className="p-2 rounded-md bg-white shadow-md m-2">
                <div className="flex items-center gap-2 px-2">
                    <img src="/Images/profile1.png" alt="" className="w-12 h-12 object-cover rounded-full" />
                    <div className="w-full">
                        <h2 className="font-semibold">Sarah Jhonshon</h2>
                        <div>
                            <span className="text-sm text-gray-600">12 pembelian</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 px-3 bg-gray-100 rounded-md border-1 border-gray-100 hover:border-blue-500"><Share className="w-5 h-5" /></button>
                        <button className="p-2 px-3 bg-gray-100 rounded-md border-1 border-gray-100 hover:border-blue-500"><Flag className="w-5 h-5" /></button>
                        <button className="p-2 px-3 bg-gray-100 rounded-md border-1 border-gray-100 hover:border-blue-500"><Ellipsis className="w-5 h-5" /></button>
                    </div>
                </div>
                <div className="flex items-center gap-2 p-2">
                    <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="text-gray-400 text-sm">
                        20 Juli 2024
                    </div>
                </div>
                <div className="p-2">
                    <h2 className="text-xl text-center font-semibold">Bagus tapi agak kecil</h2>
                    <div className="flex items-center gap-3 text-sm text-gray-500 py-2">
                        <p>Ukuran: <span className="font-semibold text-black">L</span></p>
                        <p>Warna: <span className="font-semibold text-black">Black</span></p>
                    </div>
                    <p className="text-gray-500 text-base py-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi molestias doloremque eum dolores. Repellendus deleniti provident dicta laudantium porro, numquam libero ullam quas, at earum dolore nemo sed nesciunt.
                    </p>
                </div>
                <div className="flex items-center gap-4 p-4 border-t-1 border-gray-200">
                    <button className="flex items-center gap-1 text-sm text-gray-700 border-1 border-gray-100 hover:border-blue-500 p-2 px-3 bg-gray-100 rounded-md">
                        <ThumbsUp className="w-4 h-4" />
                        <span>Membantu (15)</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-700 border-1 border-gray-100 hover:border-blue-500 p-2 px-3 bg-gray-100 rounded-md">
                        <ThumbsDown className="w-4 h-4" />
                        <span>Tidak Membantu</span>
                    </button>
                    <button className="text-blue-600 p-2 px-3 bg-gray-100 rounded-md border-1 border-gray-100 hover:border-blue-500 ml-auto">Balas</button>
                </div>
            </div>
            <div className="p-2 rounded-md bg-white shadow-md m-2">
                <div className="flex items-center gap-2 px-2">
                    <img src="/Images/profile1.png" alt="" className="w-12 h-12 object-cover rounded-full" />
                    <div className="w-full">
                        <h2 className="font-semibold">Sarah Jhonshon</h2>
                        <div>
                            <span className="text-sm text-gray-600">12 pembelian</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="p-2 px-3 bg-gray-100 rounded-md border-1 border-gray-100 hover:border-blue-500"><Share className="w-5 h-5" /></button>
                        <button className="p-2 px-3 bg-gray-100 rounded-md border-1 border-gray-100 hover:border-blue-500"><Flag className="w-5 h-5" /></button>
                        <button className="p-2 px-3 bg-gray-100 rounded-md border-1 border-gray-100 hover:border-blue-500"><Ellipsis className="w-5 h-5" /></button>
                    </div>
                </div>
                <div className="flex items-center gap-2 p-2">
                    <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <Star className="w-4 h-4 text-gray-400" />
                    </div>
                    <div className="text-gray-400 text-sm">
                        20 Juli 2024
                    </div>
                </div>
                <div className="p-2">
                    <h2 className="text-xl text-center font-semibold">Bagus tapi agak kecil</h2>
                    <div className="flex items-center gap-3 text-sm text-gray-500 py-2">
                        <p>Ukuran: <span className="font-semibold text-black">L</span></p>
                        <p>Warna: <span className="font-semibold text-black">Black</span></p>
                    </div>
                    <p className="text-gray-500 text-base py-2">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea eligendi molestias doloremque eum dolores. Repellendus deleniti provident dicta laudantium porro, numquam libero ullam quas, at earum dolore nemo sed nesciunt.
                    </p>
                </div>
                <div className="flex items-center gap-4 p-4 border-t-1 border-gray-200">
                    <button className="flex items-center gap-1 text-sm text-gray-700 border-1 border-gray-100 hover:border-blue-500 p-2 px-3 bg-gray-100 rounded-md">
                        <ThumbsUp className="w-4 h-4" />
                        <span>Membantu (15)</span>
                    </button>
                    <button className="flex items-center gap-1 text-sm text-gray-700 border-1 border-gray-100 hover:border-blue-500 p-2 px-3 bg-gray-100 rounded-md">
                        <ThumbsDown className="w-4 h-4" />
                        <span>Tidak Membantu</span>
                    </button>
                    <button className="text-blue-600 p-2 px-3 bg-gray-100 rounded-md border-1 border-gray-100 hover:border-blue-500 ml-auto">Balas</button>
                </div>
            </div>
            <div className="w-full p-5 text-center">
                <Link to="/detail-review/product/id" className="m-2 p-3 px-4 bg-gray-100 rounded-md shadow-md border-1 border-gray-100 hover:text-blue-600 hover:border-blue-600">Muat Lebih Banyak</Link>
            </div>
        </div>
    )
}