import { Grid2X2 } from "lucide-react";
import { useState, useEffect } from "react";
import CategoriesPresenter from "../../Presenters/CategoriesPresenter";
import data from "../../Models/data";

export default function HomeCategories() {
    const [categories, setCategories] = useState(null);

    const presenter = new CategoriesPresenter({
        model: new data(),
        view: {
            setCategories: setCategories
        }
    });

    useEffect(() => {
        presenter.getCategories();
    }, []);

    return (
        <div className="pt-10 p-5">
            <div className="p-10">
                <h2 className="text-2xl font-bold py-3">Kategori Produk</h2>
                <p className="text-sm text-gray-700">Temukan produk sesuai kebutuhan anda</p>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(130px,_1fr))] gap-5 py-5">
                    {categories?.map(value => (
                        <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear hover:scale-102 hover:shadow-sm">
                            <div className="flex items-center justify-center">
                                <img src={value.picture} alt="" className="w-25 h-25 object-cover" />
                            </div>
                            <h2 className="text-base font-bold py-1">{value.name}</h2>
                            <p className="text-sm text-gray-500">1.234rb produk</p>
                        </div>
                    ))}
                                        {categories?.map(value => (
                        <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear hover:scale-102 hover:shadow-sm">
                            <div className="text-4xl pb-8">🎧</div>
                            <h2 className="text-base font-bold py-1">{value.name}</h2>
                            <p className="text-sm text-gray-500">1.234rb produk</p>
                        </div>
                    ))}
                                        {categories?.map(value => (
                        <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear hover:scale-102 hover:shadow-sm">
                            <div className="text-4xl pb-8">🎧</div>
                            <h2 className="text-base font-bold py-1">{value.name}</h2>
                            <p className="text-sm text-gray-500">1.234rb produk</p>
                        </div>
                    ))}
                                        {categories?.map(value => (
                        <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear hover:scale-102 hover:shadow-sm">
                            <div className="text-4xl pb-8">🎧</div>
                            <h2 className="text-base font-bold py-1">{value.name}</h2>
                            <p className="text-sm text-gray-500">1.234rb produk</p>
                        </div>
                    ))}
                                        {categories?.map(value => (
                        <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear hover:scale-102 hover:shadow-sm">
                            <div className="text-4xl pb-8">🎧</div>
                            <h2 className="text-base font-bold py-1">{value.name}</h2>
                            <p className="text-sm text-gray-500">1.234rb produk</p>
                        </div>
                    ))}
                                        {categories?.map(value => (
                        <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear hover:scale-102 hover:shadow-sm">
                            <div className="text-4xl pb-8">🎧</div>
                            <h2 className="text-base font-bold py-1">{value.name}</h2>
                            <p className="text-sm text-gray-500">1.234rb produk</p>
                        </div>
                    ))}
                                        {categories?.map(value => (
                        <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear hover:scale-102 hover:shadow-sm">
                            <div className="text-4xl pb-8">🎧</div>
                            <h2 className="text-base font-bold py-1">{value.name}</h2>
                            <p className="text-sm text-gray-500">1.234rb produk</p>
                        </div>
                    ))}
                                        {categories?.map(value => (
                        <div className="p-4 border-1 border-gray-200 text-center rounded-lg bg-white transition duration-200 linear hover:scale-102 hover:shadow-sm">
                            <div className="text-4xl pb-8">🎧</div>
                            <h2 className="text-base font-bold py-1">{value.name}</h2>
                            <p className="text-sm text-gray-500">1.234rb produk</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}