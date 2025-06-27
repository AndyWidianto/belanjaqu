import { ArrowLeft, Banknote, HandCoins, Landmark, Wallet } from "lucide-react";
import { useState } from "react"
import { Link } from "react-router";

export default function MethodPayment() {

    const [showTransferBank, setShowTransferBank] = useState(false);
    const [showEWallet, setShowEWallet] = useState(false);

    return (
        <>
            <div className="flex items-center gap-4 bg-blue-400 text-gray-100">
                <Link className="px-4"><ArrowLeft /></Link>
                <div className="p-2">
                    <h2 className="text-lg font-semibold">Pilih Metode Pembayaran</h2>
                    <p className="text-sm text-gray-200">Pilih cara pembayaran yang paling nyaman untuk Anda</p>
                </div>
            </div>
            <div className="flex items-center justify-center w-full text-base">
                <div className="p-5 w-lg lg:w-[70%] rounded-sm">
                    <form className="flex flex-col">
                        <div onClick={() => setShowTransferBank(!showTransferBank)} className={`flex p-3 w-full items-center justify-between border-1 border-gray-200 ${showTransferBank ? 'border-b-0 rounded-t-sm' : 'rounded-sm'}`}>
                            <Landmark className="w-10 h-10" />
                            <h2 className="text-base font-semibold">Transfer Bank</h2>
                            <div className={`border-2 border-b-0 border-l-0 w-2 h-2 transition duration-500 ${showTransferBank ? 'rotate-135' : 'rotate-45'}`}></div>
                        </div>
                        <div className={`flex items-center flex-col justify-center w-full border-0 border-gray-200 rounded-y-sm px-1 mb-2 overflow-hidden transition-all duration-500 linear ${showTransferBank ? 'max-h-80 p-1 border-1 border-t-0' : 'max-h-0'}`}>
                            <div className={`p-2 flex flex-col w-full gap-3`}>
                                <label className="flex items-center gap-3 p-2 border-1 border-gray-100 w-full border-gray-400 hover:border-blue-600 rounded-md">
                                    <div className="flex items-center gap-2 w-full p-1">
                                        <img src="/Images/bank bni.png" alt="" className="w-10 h-10 object-cover rounded-md" />
                                        <div className="font-semibold w-full">
                                            <h2>BANK BNI</h2>
                                            <p className="text-gray-600 text-sm">Transfer melalui ATM, BNI Mobile, atau Internet Banking</p>
                                        </div>
                                        <input type="radio" name="metode_payment" id="radio" className="w-4 h-4" />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div onClick={() => setShowEWallet(!showEWallet)} className={`flex p-3 w-full items-center justify-between border-1 border-gray-200 ${showEWallet ? 'border-b-0 rounded-t-sm' : 'rounded-sm'}`}>
                            <Wallet className="w-10 h-10" />
                            <h2 className="text-base font-semibold">E-Wallet</h2>
                            <div className={`border-2 border-b-0 border-l-0 w-2 h-2 transition duration-500 ${showEWallet ? 'rotate-135' : 'rotate-45'}`}></div>
                        </div>
                        <div className={`flex items-center flex-col justify-center w-full border-0 border-gray-200 rounded-y-sm px-1 mb-2 overflow-hidden transition-all duration-500 linear ${showEWallet ? 'max-h-80 p-1 border-1 border-t-0' : 'max-h-0'}`}>
                            <div className={`p-2 flex flex-col w-full gap-3`}>
                                <label className="flex items-center gap-3 p-2 border-1 border-gray-100 w-full border-gray-400 hover:border-blue-600 rounded-md">
                                    <div className="flex items-center gap-2 w-full p-1">
                                        <img src="/Images/bank bni.png" alt="" className="w-10 h-10 object-cover rounded-md" />
                                        <div className="font-semibold w-full">
                                            <h2>BANK BNI</h2>
                                            <p className="text-gray-600 text-sm">Transfer melalui ATM, BNI Mobile, atau Internet Banking</p>
                                        </div>
                                        <input type="radio" name="metode_payment" id="radio" className="w-4 h-4" />
                                    </div>
                                </label>
                            </div>
                        </div>
                        <label className="flex items-center gap-3 p-2 border-1 border-gray-100 w-full border-gray-400 hover:border-blue-600 rounded-md">
                            <div className="flex items-center gap-2 w-full p-1">
                                <HandCoins className="w-10 h-10 text-blue-600 " />
                                <div className="font-semibold w-full">
                                    <h2>Bayar ditempat(COD)</h2>
                                    <p className="text-gray-600 text-sm">Transfer melalui ATM, BNI Mobile, atau Internet Banking</p>
                                </div>
                                <input type="radio" name="metode_payment" id="radio" className="w-4 h-4" />
                            </div>
                        </label>
                        <div className="py-3 flex gap-3 items-center justify-end">
                            <button type="submit" className="p-3 border-1 border-blue-200 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-sm">Buat Metode Pembayaran</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}