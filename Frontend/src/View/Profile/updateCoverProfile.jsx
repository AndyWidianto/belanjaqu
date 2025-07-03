import { ArrowDownLeft, ArrowLeft, Camera, Save, Trash2 } from "lucide-react";
import { useState } from "react";
import { useRef } from "react";
import updateCoverPresenter from "../../Presenters/updateCoverPresenter";
import data from "../../Models/data";
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";

export default function UpdateCoverProfile() {
    const [previewCoverPicture, setPreviewCoverPicture] = useState(null);
    const [coverPicture, setCoverPicture] = useState(null);
    const [profile, setProfile] = useState(null);

    const navigate = useNavigate();
    const refUpdateCover = useRef();

    const presenter = new updateCoverPresenter({
        model: new data(),
        view: {
            navigate: navigate,
            setPreviewCoverPicture: setPreviewCoverPicture,
            setProfile: setProfile,
            setCoverPicture: setCoverPicture
        }
    })

    function handleChangeCoverPicture(e) {
        const image = e.target.files[0];
        setPreviewCoverPicture(URL.createObjectURL(image));
        setCoverPicture(image);
    }
    
    function hanldeSave() {
        presenter.updateCoverProfile(coverPicture, profile.profile_id);
    }

    useEffect(() => {
        presenter.getProfile();
    }, []);

    return (
        <section className="flex flex-col items-center h-screen m-0 bg-gray-900">
            <div className="flex items-center w-full px-5 font-semibold text-base sm:text-lg text-gray-100">
                <Link to="/profile"><ArrowLeft className="w-5 h-5 sm:w-7 sm:h-7" /></Link>
                <div className="w-full text-center">
                    Cover Profile
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex justify-center sm:px-20 pt-10">
                    <img src={previewCoverPicture || '/Images/E-Commerce.jpg'} alt="" className="aspect-5/2 object-cover" />
                </div>
                <div className="flex items-center justify-center gap-5 p-5 pb-20 text-gray-100 font-semibold text-sm text-center">
                    <button onClick={hanldeSave} className="flex flex-col items-center"><Save className="w-5 h-5" /> Simpan</button>
                    <div className="p-1">
                        <input type="file" name="update_cover" id="update_cover" ref={refUpdateCover} onChange={handleChangeCoverPicture} hidden />
                        <button onClick={() => refUpdateCover.current.click()} className="flex flex-col items-center cursor-pointer"><Camera className="w-5 h-5" /> Perbarui Foto</button>
                    </div>
                    <button className="flex flex-col items-center"><Trash2 className="w-5 h-5" /> Hapus</button>
                </div>
            </div>
        </section>
    )
}