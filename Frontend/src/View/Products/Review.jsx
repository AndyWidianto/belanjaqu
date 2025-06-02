import { FaStar, FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

export default function ReviewProduct() {

    return (
        <div className="lg:flex px-3 gap-3 lg:justify-between">
            <div className="mx-20 w-100 p-3 lg:order-2">
                <div className="flex items-center justify-between border-b-1 border-gray-200 gap-3 py-4 text-xl font-semibold">
                    <div className="flex items-center gap-3">
                        <FaStar className="text-yellow-600" />
                        <FaStar className="text-yellow-600" />
                        <FaStar className="text-yellow-600" />
                        <FaStar className="text-yellow-600" />
                        <FaStar />
                    </div>
                    <div>
                        4.8
                    </div>
                </div>
                <div className="flex items-center gap-2 py-1">
                    <span>5</span>
                    <div className="w-full h-3 rounded-sm bg-gray-400 overflow-hidden">
                        <div className="w-[80%] h-3 rounded-sm bg-green-600"></div>
                    </div>
                    <span>45</span>
                </div>
                <div className="flex items-center gap-2 py-1">
                    <span>4</span>
                    <div className="w-full h-3 rounded-sm bg-gray-400 overflow-hidden">
                        <div className="w-[50%] h-3 rounded-sm bg-green-600"></div>
                    </div>
                    <span>45</span>
                </div>
                <div className="flex items-center gap-2 py-1">
                    <span>3</span>
                    <div className="w-full h-3 rounded-sm bg-gray-400 overflow-hidden">
                        <div className="w-[40%] h-3 rounded-sm bg-green-600"></div>
                    </div>
                    <span>45</span>
                </div>
                <div className="flex items-center gap-2 py-1">
                    <span>2</span>
                    <div className="w-full h-3 rounded-sm bg-gray-400 overflow-hidden">
                        <div className="w-[60%] h-3 rounded-sm bg-green-600"></div>
                    </div>
                    <span>45</span>
                </div>
                <div className="flex items-center gap-2 py-1">
                    <span>1</span>
                    <div className="w-full h-3 rounded-sm bg-gray-400 overflow-hidden">
                        <div className="w-[10%] h-3 rounded-sm bg-green-600"></div>
                    </div>
                    <span>45</span>
                </div>
            </div>
            <div className="block lg:order-1">
                <select name="ranting" id="ranting">
                    <option value="1">bitang 5</option>
                    <option value="1">bitang 4</option>
                    <option value="1">bitang 3</option>
                    <option value="1">bitang 2</option>
                    <option value="1">bitang 1</option>
                </select>
                <div className="block bg-white border-b-1 border-gray-400 p-2 my-2">
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
                        <div className="p-2 flex gap-4 items-center">
                            <div>
                                <button><FaRegThumbsUp /></button>
                                <span>10+jt</span>
                            </div>
                            <button><FaRegThumbsDown /></button>
                        </div>
                    </div>
                </div>
                <div className="block bg-white border-b-1 border-gray-400 p-2 my-2">
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
                        <div className="p-2 flex gap-4 items-center">
                            <div>
                                <button><FaRegThumbsUp /></button>
                                <span>10+jt</span>
                            </div>
                            <button><FaRegThumbsDown /></button>
                        </div>
                    </div>
                </div>                <div className="block bg-white border-b-1 border-gray-400 p-2 my-2">
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
                        <div className="p-2 flex gap-4 items-center">
                            <div>
                                <button><FaRegThumbsUp /></button>
                                <span>10+jt</span>
                            </div>
                            <button><FaRegThumbsDown /></button>
                        </div>
                    </div>
                </div>
                <div className="block bg-white border-b-1 border-gray-400 p-2 my-2">
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
                        <div className="p-2 flex gap-4 items-center">
                            <div>
                                <button><FaRegThumbsUp /></button>
                                <span>10+jt</span>
                            </div>
                            <button><FaRegThumbsDown /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}