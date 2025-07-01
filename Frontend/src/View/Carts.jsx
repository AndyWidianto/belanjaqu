import { Trash } from "lucide-react";

export default function Carts() {

    return (
        <>
        <div className="pt-6 bg-gray-100">
            <div className="flex gap-2 p-2 border-1 border-gray-200 bg-white rounded-sm shadow-md">
                <div className="m-2 w-50 h-50">
                    <img src="Images/produk-1.jpg" alt="" className="w-full h-full object-cover" />
                </div>
                <div className="w-4/5 h-full p-2">
                    <h2 className="text-2xl text-gray-800 font-bold py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem odit numquam! Soluta, accusamus quibusdam?</h2>
                    <p className="text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat error praesentium deserunt cum quibusdam laboriosam voluptas debitis tempora a? Provident nostrum delectus doloribus dolorem quidem facere ullam ea rerum possimus.</p>
                </div>
                <div className="flex flex-col justify-center px-4 ml-auto">
                    <button className="p-3 bg-red-600 text-gray-100">
                        <Trash className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}