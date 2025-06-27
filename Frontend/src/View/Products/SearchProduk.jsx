import { Link, useParams } from "react-router"

export default function SearchProduct() {
    const searchValue = useParams();

    return (
        <>
            <div className="p-3">
                <h2 className="font-semibold text-lg">{searchValue?.product}</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 justify-between p-2">
                    <Link to="/product" className="block shadow-xl/20 rounded-sm">
                        <div className="">
                            <img src="/Images/produk-1.jpg" className="w-[500px] object-cover rounded-sm" alt="" />
                        </div>
                        <div className="flex p-3 justify-between items-end">
                            <div>
                                <h2 className="font-medium p-1">Produk</h2>
                                <h2 className="font-semibold p-1">RP16.000</h2>
                            </div>
                            <div className="text-sm md:text-md">
                                10rb+ terjual
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}