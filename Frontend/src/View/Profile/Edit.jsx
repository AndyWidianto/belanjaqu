import { useRef, useState } from "react";

export default function EditProfile() {
    const [showImage, setShowImage] = useState(null);
    const imageRef = useRef();

    function handleSelectImage(e) {
        const url = URL.createObjectURL(e.target.files[0]);
        setShowImage(url);
    }

    return (
        <>
            <div className="w-full h-full flex items-center justify-center">
                <div className="w-full bg-white my-5 p-3">
                    <form>
                        <div className="flex items-center gap-2 p-4 text-md">
                            <div className="flex flex-col items-center m-3">
                                <input type="file" name="image" id="image" onChange={handleSelectImage} ref={imageRef} hidden />
                                <button type="button" className="border-2 border-gray-200 rounded-full w-100" onClick={() => imageRef.current.click()}>
                                    {showImage ? 
                                    <img src={showImage} alt="foto sampul" className="w-100 h-100 object-cover rounded-full" /> : 
                                    <img src="Images/produk-3.jpg" alt="foto sampul" className="w-100 h-100 object-cover rounded-full" />}
                                </button>
                            </div>
                            <div className="w-full flex flex-col gap-4 p-2 pr-20">
                                <div>
                                    <label htmlFor="name">Username</label>
                                    <input type="text" name="username" id="username" className="w-full p-1 px-2 border-1 border-gray-400 rounded-sm" />
                                </div>
                                <div>
                                    <label htmlFor="phone-number">Phone Number</label>
                                    <input type="number" name="phone-number" id="phone-number" className="w-full p-1 px-2 border-1 border-gray-400 rounded-sm" />
                                </div>
                                <div>
                                    <label htmlFor="description">Description</label>
                                    <textarea type="" name="description" id="description" className="w-full h-30 p-1 px-2 border-1 border-gray-400 rounded-sm" />
                                </div>
                                <div>
                                    <label htmlFor="address">Address</label>
                                    <input type="text" name="address" id="address" className="w-full p-1 px-2 border-1 border-gray-400 rounded-sm" />
                                </div>
                                <div className="flex items-center my-4 gap-3">
                                    <button type="submit" className="p-1 px-4 bg-blue-500 text-white rounded-md border-1 border-blue-400">save</button>
                                    <button type="button" className="p-1 px-4 bg-gray-200 border-1 border-gray-400 rounded-md">cancel</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}