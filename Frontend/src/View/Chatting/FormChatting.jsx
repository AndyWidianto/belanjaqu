import { useEffect } from "react";
import { Menu, MoreVertical, Paperclip, Phone, Send, Smile, Video } from "lucide-react";
import ChattingPresenter from "../../Presenters/chattingPresenter";
import data from "../../Models/data";
import { useState } from "react";
import { useRef } from "react";

export default function FormChatting({ messages, username, setMessage, message, handleSubmit, brightness, background, setBackground, setPreview }) {

    const [user, setUser] = useState(null);
    const [openDropDownSetup, setOpenDropDownSetup] = useState(false);


    const refMessages = useRef();
    const refSettingBackground = useRef();
    const refDropDownSetup = useRef();

    const presenter = new ChattingPresenter({
        model: new data(),
        view: {
            setPartnerUser: setUser
        }
    })

    function handleSettingBackground(e) {
        const image = URL.createObjectURL(e.target.files[0]);
        if (image) {
            setBackground(image);
            setPreview(true);
        }
    }

    function handleClickOutside(e) {
        if (refDropDownSetup.current && !refDropDownSetup.current.contains(e.target)) {
            setOpenDropDownSetup(false);
        }
    }

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleClickOutside, true);
        if (refMessages.current) {
            refMessages.current.scrollIntoView({ behavior: "smooth" })
        }
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleClickOutside);
        }
    }, [messages, openDropDownSetup]);
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
                            <ul className={`absolute right-0 w-45 z-15 bg-white rounded-sm shadow-sm overflow-hidden transition-all duration-300 linear ${openDropDownSetup ? 'max-h-25 border-1 border-gray-400' : 'max-h-0'}`}>
                                <li><button className="p-2 transition w-full duration-200 text-start hover:bg-blue-100">Pengaturan</button></li>
                                <li>
                                    <input type="file" name="setting" id="setting" accept="image/*" onChange={handleSettingBackground} ref={refSettingBackground} hidden />
                                    <button className="p-2 transition w-full duration-200 text-start hover:bg-blue-100" onClick={() => refSettingBackground.current.click()}>Setting Background</button>
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
                                        <div className="px-3 rounded-r-xl rounded-b-xl wrap-anywhere pt-1 max-w-6/10 lg:max-w-xl bg-gray-200">
                                            <p className="p-0 m-0">{value.content}</p>
                                            <div className="text-xss text-gray-400 w-full text-end p-0 m-0">{presenter.parseCreatedAt(value.createdAt)}</div>
                                        </div>
                                    </li> :
                                    <li className="flex w-full justify-end my-1">
                                        <div className="px-3 rounded-l-xl rounded-b-xl wrap-anywhere pt-1 max-w-6/10 lg:max-w-xl bg-blue-200">
                                            <p>{value.content}</p>
                                            <div className="text-xss text-gray-400 w-full text-start p-0 m-0">{presenter.parseCreatedAt(value.createdAt)}</div>
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
                        <div className="flex items-center gap-2 px-2 p-2 fixed w-[calc(100%-0px] sm:w-[calc(100% - 360px)] left-0 md:left-[360px]  bg-white border-t border-gray-200 right-0 bottom-0 z-10">
                            <div className="flex items-center w-full space-x-3">
                                <div className="flex items-center w-full relative">
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        // onKeyPress={handleKeyPress}
                                        placeholder="Ketik pesan..."
                                        className="w-full px-4 py-2 pr-12 bg-gray-100 rounded-full scrollbar-hidden resize-none focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all duration-200"
                                        rows="1"
                                    />
                                    <div className="flex items-center absolute right-5 gap-2">
                                        <Paperclip className="w-5 h-5 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" />
                                        <Smile className="w-5 h-5 text-gray-400 cursor-pointer hover:text-blue-500 transition-colors" />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    // onClick={handleSendMessage}
                                    className="text-blue-600 rounded-full flex items-center justify-center hover:shadow-lg"
                                // disabled={!newMessage.trim()}
                                >
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