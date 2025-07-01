import { useEffect, useRef, useState } from "react";
import { DollarSign, FileText, Hash, Image, Package, Plus, Ruler, Tag, Trash, Trash2, Weight } from "lucide-react";
import { FaPlus, FaTrash } from "react-icons/fa6";

export default function AddProduct() {
    const [images, setImages] = useState([]);
    const [priceSize, setPriceSize] = useState(['']);

    const inputImage = useRef();
    const categories = [
        'Pakaian', 'Elektronik', 'Makanan', 'Minuman', 'Kesehatan', 'Kecantikan',
        'Olahraga', 'Hobi', 'Buku', 'Rumah Tangga', 'Otomotif', 'Lainnya'
    ];

    function handleAddImage(e) {
        let url = [];
        for (let i = 0; i < e.target.files.length; i++) {
            url.push(URL.createObjectURL(e.target.files[i]));
        }
        setImages([...images, ...url]);
    }
    function handleDeleteImage(index) {
        const newImages = images?.filter(value => value !== images[index]);
        setImages(newImages);
    }

    function handleDeleteSize(index) {
        const newPriceSize = priceSize.filter((value, index2) =>  index2 !== index);
        setPriceSize(newPriceSize);
    }
    useEffect(() => {
    }, []);
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full bg-gray-100 text-base">
                <div className="flex w-full justify-center items-center p-6">
                    <div className="font-bold text-center">
                        <h2 className="text-4xl text-blue-600">Tambah Produk Baru</h2>
                        <p className="text-gray-800">Lengkapi Informasi yang ingin di tambahkan</p>
                    </div>
                </div>
                <div className="p-5 w-full md:w-4/5 lg:w-4/6 rounded-sm">
                    <form className="flex flex-col gap-3">
                        <div className="w-full">
                            <div className="flex items-center gap-1 text-sm font-semibold">
                                <Tag className="w-4 h-4 text-yellow-500" />
                                <label htmlFor="nama penerima">Nama Produk *</label>
                            </div>
                            <input type="text" name="name" id="name" placeholder="Samsung Galaxi 1000" className="w-full p-2 px-3 border-1 border-gray-400 rounded-md focus:outline focus:outline-blue-500" />
                        </div>
                        <div className="flex gap-2 flex-col sm:flex-row">
                            <div className="w-full">
                                <div className="flex items-center gap-1 text-sm font-semibold">
                                    <DollarSign className="w-4 h-4 text-green-500" />
                                    <label htmlFor="nomor telepon">Harga *</label>
                                </div>
                                <div className="flex items-center relative">
                                    <div className="absolute left-0 h-full p-2 font-semibold">Rp.</div>
                                    <input type="text" inputMode="numeric" maxLength="16" pattern="[0-9]*" name="number" id="number" placeholder="100.000" className="w-full p-2 pl-10 border-1 border-gray-400 rounded-md focus:outline focus:outline-blue-500" />
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex items-center gap-1 text-sm font-semibold">
                                    <Hash className="w-4 h-4 text-orange-500" />
                                    <label htmlFor="nama penerima">Stock</label>
                                </div>
                                <input type="text" name="name" id="name" className="w-full p-2 px-3 border-1 border-gray-400 rounded-md focus:outline focus:outline-blue-500" />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center gap-1 text-sm font-semibold">
                                <Weight className="w-4 h-4 text-purple-500" />
                                <label htmlFor="nomor telepon">Berat</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input type="text" inputMode="numeric" maxLength="16" pattern="[0-9]*" name="number" id="number" className="w-full p-2 px-3 border-1 border-gray-400 rounded-md focus:outline focus:outline-blue-500" />
                                <select name="berat_satuan" id="berat-satuan" className="p-2 px-3 border-1 border-gray-400 rounded-md focus:outline focus:outline-blue-500">
                                    <option value="">Gram</option>
                                    <option value="">Kilogram</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center gap-1 text-sm font-semibold">
                                <FileText className="w-4 h-4 text-green-500" />
                                <label htmlFor="nomor telepon">Deskripsi produk</label>
                            </div>
                            <textarea name="catatan" id="catatan" className="w-full p-2 px-3 border-1 border-gray-400 rounded-md focus:outline focus:outline-blue-500 h-30" />
                        </div>
                        <div className="w-full">
                            <div className="flex items-center gap-1 text-sm font-semibold">
                                <Image className="w-4 h-4 text-green-500" />
                                <label htmlFor="nomor telepon">Image Produk</label>
                            </div>
                            <div className="flex items-center flex-wrap gap-1 p-2">
                                {images?.map((value, index) => (
                                    <div className="group flex items-center relative w-15 h-15 transition duration-200 hover:brightness-50" onClick={() => handleDeleteImage(index)}>
                                        <img src={value} alt="" className="w-full h-full object-cover rounded-sm" key={index} />
                                        <div className="absolute hidden group-hover:flex items-center justify-center w-full h-full hover:text-white">
                                            <Trash className="w-4 h-4 text-red-500" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <input type="file" name="image" id="image" ref={inputImage} onChange={handleAddImage} multiple hidden />
                            <button type="button" onClick={() => inputImage.current.click()} className="flex justify-start items-center gap-1 w-50 p-1 text-sm text-blue-600 cursor-pointer hover:text-blue-700"><FaPlus /> Tambah Image</button>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center gap-1 text-sm font-semibold">
                                <Package className="w-4 h-4 text-green-500" />
                                <label htmlFor="kategori">Kategori *</label>
                            </div>
                            <select name="kategori" id="kategori" className="w-full p-2 px-2 border-1 border-gray-400 rounded-md focus:outline focus:outline-blue-500">
                                <option value="">Pilih kategori</option>
                                {categories.map(value => (
                                    <option value="value">{value}</option>
                                ))}
                            </select>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center gap-1 text-sm font-semibold my-1">
                                <Ruler className="w-4 h-4 text-purple-500" />
                                <label htmlFor="size">Pilih Ukuran</label>
                                <select name="size-satuoan" id="size-satuan" className="ml-auto p-2 px-2 border-1 border-gray-400 rounded-md focus:outline focus:outline-blue-500">
                                    <option value="">Satuan</option>
                                    <option value="">cm</option>
                                    <option value="">S, L, XL</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                {priceSize.map((value, index) => (
                                    priceSize.length > 1 ? (
                                        <div className="flex items-center gap-5" key={index}>
                                            <input type="text" inputMode="numeric" maxLength="16" pattern="[0-9]*" name="number" id="number" placeholder="masukan ukuran product" className="w-full p-2 px-3 border-1 border-gray-400 rounded-md focus:outline focus:outline-blue-500" />
                                            <button type="button" onClick={() => handleDeleteSize(index)}><Trash2 className="w-5 h-5 text-red-600" /></button>
                                        </div>
                                    ) : (
                                        <input type="text" inputMode="numeric" maxLength="16" pattern="[0-9]*" name="number" id="number" placeholder="masukan ukuran product" className="w-full p-2 px-3 border-1 border-gray-400 rounded-md focus:outline focus:outline-blue-500" />
                                    )
                                ))}
                            </div>
                            <button type="button" onClick={() => setPriceSize([...priceSize, ''])} className="flex items-center gap-1 p-1 py-2 text-sm text-blue-600 font-semibold"><Plus className="w-4 h-4" /> Tambah Ukuran</button>
                        </div>
                        <div className="py-3 flex flex-col gap-3 items-center justify-start">
                            <button className="flex items-center justify-center w-full p-2 px-6 border-1 border-blue-100 bg-gray-400 hover:bg-gray-300 rounded-sm">Batal</button>
                            <button type="submit" className="flex items-center justify-center w-full gap-2 p-2 px-6 border-1 border-blue-200 bg-blue-700 hover:bg-blue-800 text-white rounded-sm"><Plus className="w-5 h-5" />Buat Produk</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}