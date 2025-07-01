import { useEffect } from "react";
import { Camera, File, Images, Menu, MoreVertical, Paperclip, Phone, Send, Settings, SlidersHorizontal, Smile, Video, X } from "lucide-react";
import ChattingPresenter from "../../Presenters/chattingPresenter";
import data from "../../Models/data";
import { useState } from "react";
import { useRef } from "react";
import "emoji-picker-element";

export default function FormChatting({ messages, username, setMessage, message, handleSubmit, brightness, background, setBackground, setPreview }) {

    const [user, setUser] = useState(null);
    const [openDropDownSetup, setOpenDropDownSetup] = useState(false);
    const [openDropdownPaperClip, setOpenDropdownPaperClip] = useState(false);
    const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
    const [images, setImages] = useState([]);


    const refMessages = useRef();
    const refSettingBackground = useRef();
    const refDropDownSetup = useRef();
    const refDropDownPaperClip = useRef();
    const refDocuments = useRef();
    const refEmojiPicker = useRef();
    const refShowEmojiPicker = useRef();
    const refImages = useRef();

    const presenter = new ChattingPresenter({
        model: new data(),
        view: {
            setPartnerUser: setUser,
            setOpenDropDownSetup: setOpenDropDownSetup,
            setOpenDropdownPaperClip: setOpenDropdownPaperClip,
            setOpenEmojiPicker: setOpenEmojiPicker,
            setMessage: setMessage
        }
    })

    function handleSettingBackground(e) {
        const image = URL.createObjectURL(e.target.files[0]);
        if (image) {
            setBackground(image);
            setPreview(true);
        }
    }

    function handleChangeImage(e) {
        const FileImages = e.target.files;
        let arrayImages = [];
        for (const image of FileImages) {
            arrayImages.push(URL.createObjectURL(image))
        }
        setImages(arrayImages);
    }

    function DeleteImage(index) {
        const NewImages = images.filter(value => value !== images[index])
        setImages(NewImages);
    }

    useEffect(() => {
        if (refMessages.current) {
            refMessages.current.scrollIntoView({ behavior: "smooth" })
        }
        presenter.HandleAddListener(refDropDownSetup, refDropDownPaperClip, refShowEmojiPicker, refEmojiPicker);
    }, [messages, refEmojiPicker]);
    useEffect(() => {
        if (!username) return;
        presenter.getPartnerUser(username);
    }, [username]);

    return (
        <>
            <div className="h-full flex-col w-full m-0">
                <div className="p-2 px-4 flex justify-between items-center fixed top-0 w-[calc(100%-0px)] sm:w-[calc(100%-360px)] left-0 sm:left-[360px] bg-white border-b-1 border-gray-300 z-10">
                    <div className="flex items-center space-x-3">
                        <button
                            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Menu className="w-5 h-5 text-gray-600" />
                        </button>
                        <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                                {user?.username.split("")[0].toUpperCase()}
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                        </div>
                        <div>
                            <h2 className="font-semibold text-gray-900">{user?.username}</h2>
                            <p className="text-sm text-green-600">Online</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Phone className="w-5 h-5 text-gray-600" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                            <Video className="w-5 h-5 text-gray-600" />
                        </button>
                        <div className="p-2 relative z-15" ref={refDropDownSetup}>
                            <button className="hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setOpenDropDownSetup(!openDropDownSetup)} >
                                <MoreVertical className="w-5 h-5 text-gray-600" />
                            </button>
                            <ul className={`absolute right-0 max-w-200 z-15 text-gray-800 bg-white text-sm overflow-hidden border-gray-400 transition-all duration-300 linear ${openDropDownSetup ? 'max-h-25 border-1' : 'max-h-0'}`}>
                                <li>
                                    <button className="flex items-center gap-2 p-2 w-full text-start hover:bg-gray-100"><Settings className="w-5 h-5" /> Pengaturan</button>
                                </li>
                                <li>
                                    <input type="file" name="setting" id="setting" accept="image/*" onChange={handleSettingBackground} ref={refSettingBackground} hidden />
                                    <button className="flex items-center gap-2 p-2 w-full text-start hover:bg-gray-100" onClick={() => refSettingBackground.current.click()}><SlidersHorizontal className="w-5 h-5" />Background</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[90dvh] pt-15 relative">
                    <img src={background} alt="" className={`w-full h-[90dvh] object-cover absolute brightness-${brightness} z-1`} />
                    <ul className="overflow-y-scroll w-full h-full p-1 px-5 relative z-5">
                        {messages?.map((value, index) => (
                            <div key={index}>
                                {user && user.user_id === value.sender_id ?
                                    <li className="flex w-full justify-start my-1">
                                        <div className="px-3 rounded-r-md rounded-b-md wrap-anywhere pt-1 max-w-6/10 lg:max-w-xl bg-gray-200">
                                            <p className="p-0 m-0">{value.content}</p>
                                            <div className="text-xss text-gray-400 w-full text-end p-0 m-0">{presenter.parseCreatedAt(value.createdAt)}</div>
                                        </div>
                                    </li> :
                                    <li className="flex w-full justify-end my-1">
                                        <div className="px-3 rounded-l-md rounded-b-md wrap-anywhere pt-1 max-w-6/10 lg:max-w-xl bg-blue-200">
                                            <p>{value.content}</p>
                                            <div className="text-xss w-full text-gray-600 text-start p-0 m-0">{presenter.parseCreatedAt(value.createdAt)}</div>
                                        </div>
                                    </li>
                                }
                            </div>
                        ))}
                    </ul>
                    <div ref={refMessages} />
                </div>
                <div className="flex">
                    <form className="w-full pl-1" onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-center gap-2 px-2 p-2 fixed w-[calc(100%-0px] sm:w-[calc(100% - 360px)] left-0 md:left-[360px]  bg-white border-t border-gray-200 right-0 bottom-0 z-10">
                            <div className="flex items-center gap-1">
                                {images.map((value, index) => (
                                    <div className="relative w-20 h-20" key={index}>
                                        <img src={value} alt="" className="h-full w-full object-cover absolute z-5" />
                                        <button type="button" onClick={() => DeleteImage(index)} className="absolute right-0 rounded-full border-1 border-gray-200 bg-gray-100 z-10 text-black m-1"><X className="w-4 h-4" /></button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center w-full gap-2">
                                <div className="flex items-center w-full relative">
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Ketik pesan..."
                                        className="w-full px-4 py-2 pr-12 bg-gray-100 scrollbar-hidden resize-none focus:outline-none focus:bg-white focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                                        rows="1"
                                    />
                                    <div className="flex items-center absolute h-full right-5 gap-2">
                                        <div className="relative flex flex-col justify-center items-center h-full" ref={refDropDownPaperClip}>
                                            <button type="button" className="group text-gray-400 cursor-pointer" onClick={() => setOpenDropdownPaperClip(!openDropdownPaperClip)}>
                                                <Paperclip className="w-5 h-5 group-hover:text-blue-500 transition-colors" />
                                            </button>
                                            <ul className={`absolute bottom-8 right-0 max-w-100 border-gray-400 bg-white text-gray-800 text-sm overflow-hidden transition-all duration-200 ease ${openDropdownPaperClip ? 'max-h-100 border-1' : 'max-h-0'}`}>
                                                <li>
                                                    <input type="file" name="document" id="document" ref={refDocuments} hidden />
                                                    <button type="button" className="flex items-center w-full gap-2 p-3 hover:bg-gray-100" onClick={() => refDocuments.current.click()}><File className="w-5 h-5" /> Documents</button>
                                                </li>
                                                <li>
                                                    <input type="file" name="Images" id="Images" ref={refImages} accept=".png, .jpg, .jpeg" onChange={handleChangeImage} multiple hidden />
                                                    <button type="button" className="flex items-center w-full gap-2 p-3 hover:bg-gray-100" onClick={() => refImages.current.click()}><Images className="w-5 h-5" /> Images</button>
                                                </li>
                                                <li>
                                                    <input type="file" name="" id="" hidden />
                                                    <button type="button" className="flex items-center w-full gap-2 p-3 hover:bg-gray-100"><Camera className="w-5 h-5" /> Kamera</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="flex items-center relative" ref={refShowEmojiPicker}>
                                            <button type="button" onClick={() => setOpenEmojiPicker(!openEmojiPicker)}>
                                                <Smile className="w-5 h-5 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" />
                                            </button>
                                            <div className={`absolute bottom-8 right-0 max-w-100 border-gray-200 transition duration-400 linear overflow-hidden ${openEmojiPicker ? 'max-h-100 border-1' : 'max-h-0'}`}>
                                                <emoji-picker ref={refEmojiPicker} ></emoji-picker>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="text-blue-600 rounded-full flex items-center justify-center mr-2 hover:shadow-lg">
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}