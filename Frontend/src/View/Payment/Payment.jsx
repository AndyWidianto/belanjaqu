import { FaLocationDot, FaPlus } from "react-icons/fa6";
import { Clock, Package, Truck, Wallet } from "lucide-react";
import { Link } from "react-router";
import Select from "react-select";

export default function Payment() {

    const KurirList = [
        { id: "jne", value: '', label: 'JNE Reguler estimasi 2-4 hari Rp18.000' },
        { id: "jnt", value: '', label: 'J&T Express estimasi 2-3 hari Rp17.000' },
        { id: "sicepat", value: '', label: 'SiCepat BEST estimasi 1-2 hari Rp20.000' },
        { id: "gosend", value: '', label: 'GoSend Same Day estimasi 0-1 hari Rp25.000' },
    ];
    return (
        <>
            <div className="sm:p-3 bg-gray-100 text-sm lg:text-base">
                <div className="">
                    <button className="flex items-center w-full gap-2 bg-white shadow-sm my-1">
                        <div className="text-start p-2 flex items-center gap-2">
                            <FaLocationDot className="text-blue-400 w-5 h-5" />
                            <div>
                                <h2 className="font-semibold">Andy Widianto</h2>
                                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error distinctio excepturi alias nihil earum?</p>
                            </div>
                        </div>
                        <div className="border-2 border-b-0 border-l-0 w-2 h-2 border-black ml-auto mx-5 rotate-45"></div>
                    </button>
                    <Link to="new-location" className="w-full flex items-center justify-center p-2 border-1 border-gray-400 my-2 hover:bg-blue-100 hover:border-blue-200"><FaPlus /></Link>
                    <div className="flex items-center flex-col lg:flex-row gap-2 lg:gap-5 p-2 text-md my-1">
                        <div className="flex flex-col gap-3 p-4 w-full lg:w-6/10 bg-white rounded-md shadow-md">
                            <div className="text-base">
                                <div className="flex items-cemter gap-2">
                                    <Package className="w-5 h-5 text-blue-400"/>
                                    <h2 className="font-semibold">Detail Product</h2>
                                </div>
                                <div className="flex items-center gap-2 p-3 lg:px-4 lg:mx-2 m-1 bg-gray-100 rounded-md">
                                    <img src="Images/produk-2.jpeg" alt="" className="sm:w-25 sm:h-25 h-20 w-20 rounded-sm object-cover" />
                                    <div className="p-2 rounded-md">
                                        <h3 className="font-semibold">Smartphone Gaming ROG Phone 7</h3>
                                        <p className="text-xs lg:text-sm text-gray-600">Jenis: putih</p>
                                        <p className="text-xs lg:text-sm text-gray-600">Jumlah: 2 unit</p>
                                        <h3 className="lg:text-lg text-blue-600">Rp86.000</h3>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="text-base">
                                    <div className="flex items-center gap-2">
                                        <Truck className="h-5 w-5 text-blue-400" />
                                        <h2 className="font-semibold">Kurir Pengiriman</h2>
                                    </div>
                                    <div className="text-blue-600">
                                        <label className="flex items-center gap-3 p-2 border-1 border-blue-600 w-full hover:border-blue-600 rounded-md my-2">
                                            <input type="radio" name="kurir_pengiriman" id="kurir_pengiriman" />
                                            <div className="w-full">
                                                <h3 className="text-black">JNE Reguler estimasi</h3>
                                                <div className="flex items-center gap-1 text-sm text-gray-400">
                                                    <Clock className="w-4 h-4"/>
                                                    <p>2-4 hari</p>
                                                </div>
                                            </div>
                                            <div className="text-lg text-blue-600">Rp18.000</div>
                                        </label>
                                        <label className="flex items-center gap-3 p-2 border-1 border-gray-400 w-full hover:border-blue-600 rounded-md my-2">
                                            <input type="radio" name="kurir_pengiriman" id="kurir_pengiriman" />
                                            <div className="w-full">
                                                <h3 className="text-black">JNE Reguler estimasi</h3>
                                                <div className="flex items-center gap-1 text-sm text-gray-400">
                                                    <Clock className="w-4 h-4"/>
                                                    <p>2-4 hari</p>
                                                </div>
                                            </div>
                                            <div>Rp18.000</div>
                                        </label>
                                        <label className="flex items-center gap-3 p-2 border-1 border-gray-400 w-full hover:border-blue-600 rounded-md my-2">
                                            <input type="radio" name="kurir_pengiriman" id="kurir_pengiriman" />
                                            <div className="w-full">
                                                <h3 className="text-black">JNE Reguler estimasi</h3>
                                                <div className="flex items-center gap-1 text-sm text-gray-400">
                                                    <Clock className="w-4 h-4"/>
                                                    <p>2-4 hari</p>
                                                </div>
                                            </div>
                                            <div>Rp18.000</div>
                                        </label>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2 w-full">
                                    <div className="flex items-center gap-2">
                                        <Wallet className="w-5 h-5 text-blue-400" />
                                        <h2 className="font-semibold">Method Payment</h2>
                                    </div>
                                    <Link to="method" className="flex items-center hover:text-blue-600 gap-1">
                                        <span className="text-sm font-semibold text-blue-600">Ubah Metode</span>
                                        <div className="border-2 w-2 h-2 border-b-0 border-l-0 rotate-45"></div>
                                    </Link>
                                </div>
                                <div className="p-2 rounded-md border-1 border-blue-600">
                                    <h2 className="font-semibold">Bayar saat Ditempat(COD)</h2>
                                    <p className="text-gray-400">Bayar saat barang diterima</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-4/10 rounded-md shadow-sm">
                            <div className="p-3 text-sm my-1 bg-white">
                                <h2 className="font-semibold my-2 text-lg">Rincian Pembelian</h2>
                                <div className="flex items-center justify-between m-1">
                                    <span className="text-md text-gray-700">subtotal</span>
                                    <span>Rp10.000</span>
                                </div>
                                <div className="flex items-center justify-between m-1">
                                    <span className="text-md text-gray-700">subtotal</span>
                                    <span>Rp10.000</span>
                                </div>
                                <div className="border-b-1 border-gray-600"></div>
                                <div className="flex items-center justify-between m-1">
                                    <span className="text-md text-gray-800">Total Pembayaran</span>
                                    <span>Rp100.000</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between fixed p-2 px-3 w-full bottom-0 sm:static bg-white sm:shadow-sm sm:rounded-sm text-base font-semibold">
                                <div>
                                    <h2>Total Rp100.000</h2>
                                </div>
                                <button className="p-2 px-6 bg-blue-300 rounded-sm shadow-md cursor-pointer">
                                    <span>Buat Pesanan</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}