import { Home, Map, Phone, User } from 'lucide-react';
import Select from 'react-select';

export default function LocationPayment() {

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
    return (
        <div className="flex items-center justify-center w-full text-base text-gray-800">
            <div className="p-5 w-full rounded-sm">
                <form className="flex gap-3">
                    <div className="w-full">
                        <div className="flex flex-col gap-3 p-2 pb-5 shadow-sm rounded-sm">
                            <div className="flex items-center gap-2">
                                <User className="w-6 h-6 text-blue-400" />
                                <h2 className="font-semibold">Informasi Pengguna</h2>
                            </div>
                            <div className="flex gap-2 flex-col">
                                <div className="w-full">
                                    <label htmlFor="nama penerima" className="text-sm">Nama Penerima *</label>
                                    <input type="text" name="name" id="name" placeholder="Masukan nama lengkap anda" className="w-full p-2 px-3 border-1 border-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 rounded-md" />
                                </div>
                                <div className="w-full relative">
                                    <label htmlFor="nomor telepon" className="text-sm">Nomor Telepon *</label>
                                    <Phone className="w-5 h-5 text-blue-500 absolute top-2/4 left-2" />
                                    <input type="text" inputMode="numeric" maxLength="16" pattern="[0-9]*" name="number" id="number" placeholder="0812-4433-2131" className="w-full p-2 px-3 pl-8 border-1 border-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 rounded-md" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 p-2 pb-5 rounded-sm shadow-sm">
                            <div className="flex items-center gap-2 p-2">
                                <Home className="w-6 h-6 text-blue-500" />
                                <h2 className="font-semibold">Detail Alamat</h2>
                            </div>
                            <div>
                                <label htmlFor="nama jalan" className="text-sm">Nama Jalan, Nomor Rumah, RT/RW *</label>
                                <textarea name="nama-jalan" id="nama-jalan" placeholder="Jl. Melati No. 10, RT 03/RW 05" className="w-full p-1 px-3 border-1 border-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 rounded-sm resize-none" />
                            </div>
                            <div>
                                <label htmlFor="catatan" className="text-sm">Catatan Tambahan<span className="text-gray-600">(Opsional)</span></label>
                                <textarea name="catatan" id="catatan" className="w-full p-1 px-3 border-1 border-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 rounded-sm h-25 resize-none" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 p-2 pb-5 shadow-sm ronded-sm">
                            <div className="flex items-center gap-2">
                                <Map className="text-blue-500" />
                                <h2 className="font-semibold">Pilih Wilayah</h2>
                            </div>
                            <div>
                                <label htmlFor="provinsi" className="text-sm">Provinsi *</label>
                                <Select options={options} className="w-full focus:outline focus:outline-2 focus:outline-blue-400 rounded-sm" />
                            </div>
                            <div>
                                <label htmlFor="" className="text-sm">Kota/Kabupaten *</label>
                                <Select options={options} className="w-full focus:outline focus:outline-2 focus:outline-blue-400 rounded-sm" />
                            </div>
                            <div>
                                <label htmlFor="" className="text-sm">Kecamatan *</label>
                                <Select options={options} className="w-full focus:outline focus:outline-2 focus:outline-blue-400 rounded-sm" />
                            </div>
                            <div>
                                <label htmlFor="" className="text-sm">Kelurahan/Desa *</label>
                                <Select options={options} className="w-full rounded-sm" />
                            </div>
                            <div>
                                <label htmlFor="code pos" className="text-sm">Kode Pos *</label>
                                <input type="text" name="code-pos" id="code-pos" className="w-full p-2 px-3 border-1 border-gray-400 focus:outline focus:outline-2 focus:outline-blue-400 rounded-md" />
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div id="map" className="w-full h-100 border-1"></div>
                        <div className="py-2 shadow-sm my-5">
                            <button type="submit" className="w-full p-3 bg-blue-600 rounded-md shadow-md text-gray-100 transition duraction-4000 hover:transform-y-4">Buat Alamat</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}