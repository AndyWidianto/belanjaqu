import { Ellipsis, Flag, Share, Star, ThumbsDown, ThumbsUp } from "lucide-react";

export default function DetailReview() {

    return (
        <section className="flex justify-center h-screen overflow-scroll bg-gray-200">
            <div className="flex flex-col gap-3 w-9/10 mt-5">
                <div className="w-full rounded-md bg-white shadow-md p-4 pt-10">
                    <div className="text-center p-4 mb-10">
                        <h2 className="text-5xl font-bold py-4">Ulasan Produk</h2>
                        <p className="text-gray-600">Keripik pisang rasa rumput laut</p>
                    </div>
                    <div className="flex items-start">
                        <div className="flex items-center w-4/10 gap-1">
                            <h2 className="text-5xl font-bold p-2">4.8</h2>
                            <div className="flex flex-col p-2 w-full">
                                <div className="flex items-center">
                                    <Star className="text-yellow-400 fill-current" />
                                    <Star className="text-yellow-400 fill-current" />
                                    <Star className="text-yellow-400 fill-current" />
                                    <Star className="text-yellow-400 fill-current" />
                                    <Star className="text-yellow-400 fill-current" />
                                </div>
                                <div className="text-gray-400 text-sm">
                                    <span>1.243 ulasan</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex items-center gap-1 text-sm">
                                <div className="flex items-center gap-1 px-4">
                                    <span>5</span>
                                    <Star className="w-3 h-3 fill-current" />
                                </div>
                                <div className="w-full rounded-full h-2 overflow-hidden bg-gray-200">
                                    <div className="w-7/10 rounded-full h-full bg-yellow-400"></div>
                                </div>
                                <div className="px-5">
                                    <span className="text-gray-500">820</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                                <div className="flex items-center gap-1 px-4">
                                    <span>4</span>
                                    <Star className="w-3 h-3 fill-current" />
                                </div>
                                <div className="w-full rounded-full h-2 overflow-hidden bg-gray-200">
                                    <div className="w-8/10 rounded-full h-full bg-yellow-400"></div>
                                </div>
                                <div className="px-5">
                                    <span className="text-gray-500">820</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                                <div className="flex items-center gap-1 px-4">
                                    <span>3</span>
                                    <Star className="w-3 h-3 fill-current" />
                                </div>
                                <div className="w-full rounded-full h-2 overflow-hidden bg-gray-200">
                                    <div className="w-7/10 rounded-full h-full bg-yellow-400"></div>
                                </div>
                                <div className="px-5">
                                    <span className="text-gray-500">820</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                                <div className="flex items-center gap-1 px-4">
                                    <span>2</span>
                                    <Star className="w-3 h-3 fill-current" />
                                </div>
                                <div className="w-full rounded-full h-2 overflow-hidden bg-gray-200">
                                    <div className="w-3/10 rounded-full h-full bg-yellow-400"></div>
                                </div>
                                <div className="px-5">
                                    <span className="text-gray-500">820</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                                <div className="flex items-center gap-1 px-4">
                                    <span>1</span>
                                    <Star className="w-3 h-3 fill-current" />
                                </div>
                                <div className="w-full rounded-full h-2 overflow-hidden bg-gray-200">
                                    <div className="w-3/10 rounded-full h-full bg-yellow-400"></div>
                                </div>
                                <div className="px-5">
                                    <span className="text-gray-500">820</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center bg-white flex-wrap gap-4 p-4 text-gray-700 text-sm font-semibold rounded-md shadow-md">
                    <button className="p-2 px-4 bg-gray-200 border-1 border-gray-200 rounded-md shadow-md hover:border-blue-600">Semua (1243)</button>
                    <button className="p-2 px-4 bg-gray-200 border-1 border-gray-200 rounded-md shadow-md hover:border-blue-600">5 Bintang (820)</button>
                    <button className="p-2 px-4 bg-gray-200 border-1 border-gray-200 rounded-md shadow-md hover:border-blue-600">4 Bintang (450)</button>
                    <button className="p-2 px-4 bg-gray-200 border-1 border-gray-200 rounded-md shadow-md hover:border-blue-600">3 Bintang (33)</button>
                    <button className="p-2 px-4 bg-gray-200 border-1 border-gray-200 rounded-md shadow-md hover:border-blue-600">2 Bintang (21)</button>
                    <button className="p-2 px-4 bg-gray-200 border-1 border-gray-200 rounded-md shadow-md hover:border-blue-600">1 Bintang (10)</button>
                </div>
                <div className="p-2 rounded-md bg-white shadow-md">
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
            </div>
        </section>
    )
}