import { useEffect, useRef, useState } from "react";

export default function Percobaan() {

    const [isMobile, setIsmobile] = useState(window.innerWidth < 768);
    const refMobile = useRef();

    useEffect(() => {
        const media = window.matchMedia('(max-width: 755px)');
        const listener = () => setIsmobile(media.matches);
        media.addEventListener("change", listener);
        return () => {
            media.removeEventListener("change", listener);
        }
    }, []);

    return (
        <>
            <h2 ref={refMobile}>di viewport 765px hilang</h2>
            <h2 className="text-lg p-10 font-semibold">Apakah ini di perangkat mobile: {isMobile ? "aktif" : "tidak aktif"}</h2>
        </>
    )
}