import { useEffect, useRef, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { Link } from "react-router";
import Select from "react-select";

export default function AddProduct() {
    const [sizesProduct, setSizesProduct] = useState([]);
    const [colors, setColors] = useState([]);
    const [color, setColor] = useState(null);
    const [images, setImages] = useState(null);

    const inputImage = useRef();
    const options = [
        { value: "jawa barat", label: "jawa barat" },
        { value: "jawa timur", label: "jawa timur" },
        { value: "jawa tengah", label: "jawa tengah" },
        { value: "kalimantan timur", label: "kalimantan timur" },
        { value: "kalimantan barat", label: "kalimantan barat" },
        { value: "kalimantan tengah", label: "kalimantan tengah" },
        { value: "kalimantan utara", label: "kalimantan utara" },
        { value: "sumatra barat", label: "sumatra barat" }
    ];

    const [sizes, setSizes] = useState([
        12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53,
        54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67,
        68, 69, 70, 71
    ]);

    function handleAddSize(size) {
        const cek = sizesProduct.find(value => value == sizes[size]);
        if (!cek) {
            setSizesProduct([...sizesProduct, sizes[size]]);
            const newSizes = sizes.filter(value => value !== sizes[size]);
            return setSizes(newSizes);
        }
    }
    function handleDeleteSize(size) {
        const findSize = sizes.find(value => value == sizesProduct[size]);
        if (!findSize) {
            setSizes([...sizes, sizesProduct[size]]);
            const newSizesProduct = sizesProduct.filter(value => value !== sizesProduct[size]);
            setSizesProduct(newSizesProduct);
        }
        console.log(sizesProduct[size]);
    }
    function handleAddImage(e) {
        let url = [];
        for (let i = 0; i < e.target.files.length; i++) {
            url.push(URL.createObjectURL(e.target.files[i]));
        }
        setImages(url);
    }
    function handleDeleteImage(index) {
        const newImages = images?.filter(value => value !== images[index]);
        setImages(newImages);
    }
    function handleAddColor() {
        setColors([...colors, {
            id: colors.length,
            color: color
        }]);
    }
    useEffect(() => {
    }, []);
    return (
        <>
            <div className="flex items-center justify-center w-full text-base">
                <div className="p-5 w-lg lg:w-[70%] rounded-sm">
                    <form className="flex flex-col gap-3">
                        <div className="flex gap-2 flex-col sm:flex-row">
                            <div className="w-full">
                                <label htmlFor="nama penerima">Nama Produk</label>
                                <input type="text" name="name" id="name" className="w-full p-1 px-2 border-1 border-gray-200 rounded-sm" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="nomor telepon">Harga</label>
                                <input type="text" inputMode="numeric" maxLength="16" pattern="[0-9]*" name="number" id="number" className="w-full p-1 px-2 border-1 border-gray-200 rounded-sm" />
                            </div>
                        </div>
                        <div className="flex gap-2 flex-col sm:flex-row">
                            <div className="w-full">
                                <label htmlFor="nama penerima">Stock</label>
                                <input type="text" name="name" id="name" className="w-full p-1 px-2 border-1 border-gray-200 rounded-sm" />
                            </div>
                            <div className="w-full">
                                <label htmlFor="nomor telepon">Berat</label>
                                <input type="text" inputMode="numeric" maxLength="16" pattern="[0-9]*" name="number" id="number" className="w-full p-1 px-2 border-1 border-gray-200 rounded-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="catatan">Deskripsi</label>
                            <textarea name="catatan" id="catatan" className="w-full p-1 px-2 border-1 border-gray-200 rounded-sm h-30" />
                        </div>
                        <div>
                            <label htmlFor="image">Image Produk</label>
                            <div className="flex items-center flex-wrap gap-1 p-2">
                                {images?.map((value, index) => (
                                    <div className="group flex items-center relative w-15 h-15 transition duration-200 hover:brightness-50" onClick={() => handleDeleteImage(index)}>
                                        <img src={value} alt="" className="w-full h-full object-cover rounded-sm" key={index} />
                                        <div className="absolute hidden group-hover:flex items-center justify-center w-full h-full hover:text-white">
                                            <FaTrash />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <input type="file" name="image" id="image" ref={inputImage} onChange={handleAddImage} multiple hidden />
                            <button type="button" onClick={() => inputImage.current.click()} className="flex justify-center items-center w-full p-1 rounded-sm bg-gray-100 border-1 border-gray-200 hover:bg-gray-200"><FaPlus /></button>
                        </div>
                        <div>
                            <label htmlFor="provinsi">Kategori</label>
                            <Select options={options} className="w-full rounded-sm" />
                        </div>
                        <div>
                            <label htmlFor="size">Pilih ukuran product</label>
                            <div className="flex flex-wrap gap-2">
                                {sizesProduct?.map((value, index) => <button type="button" onClick={() => handleDeleteSize(index)} className={`p-1 px-3 border-1 rounded-md border-green-300`} key={value}>{value}</button>)}
                            </div>
                            <div className="flex flex-wrap gap-2 py-2">
                                {sizes?.map((value, index) => <button type="button" onClick={() => handleAddSize(index)} className={`p-1 px-3 border-1 rounded-md border-gray-300`} key={value}>{value}</button>)}
                            </div>
                        </div>
                        <div className="py-3 flex gap-3 items-center justify-end">
                            <button className="p-2 px-4 border-1 border-blue-100 bg-gray-200 hover:bg-gray-300 rounded-sm">Batal</button>
                            <button type="submit" className="p-2 px-4 border-1 border-blue-200 bg-blue-600 hover:bg-blue-700 text-white rounded-sm">Buat Location</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}