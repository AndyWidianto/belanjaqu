import { Save } from "lucide-react";
import { useEffect, useRef, useState } from "react"

export default function SettingBackground({ setBrightness, background, setPreview }) {
    const [rangeBrightness, setRangeBrightness] = useState(null);
    
    const refBrightness = useRef();

    function handleChange() {
        setBrightness(rangeBrightness ? rangeBrightness : 100);
        setPreview(false);
    }

    useEffect(() => {
        if (rangeBrightness) {
            refBrightness.current.style.filter = `Brightness(${rangeBrightness}%)`;
        }
    }, [rangeBrightness]);
    return (
        <>
            <div className="flex items-center justify-center h-screen m-0 p-0 bg-black">
                <div className="w-full lg:w-lg flex flex-col gap-5">
                    <img src={background} className="aspect-3/2 object-cover rounded-sm shadow-sm" alt="" ref={refBrightness} />
                    <input type="range" name="brigtness" id="brigtness" onChange={(e) => setRangeBrightness(e.target.value)} max={100} />
                    <button onClick={handleChange} className="flex items-center justify-center gap-2 p-2 bg-blue-500 rounded-md shadow-md text-gray-100"><Save />Simpan Perubahan</button>
                </div>
            </div>
        </>
    )
}