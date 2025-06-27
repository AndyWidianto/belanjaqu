import { useEffect, useRef, useState } from "react";
import { FaSearch, FaArrowLeft } from "react-icons/fa"
import { Link, Outlet, useSearchParams } from "react-router"
import ChattingPresenter from "../../Presenters/chattingPresenter";
import data from "../../Models/data";
import io from "socket.io-client";
import FormChatting from "./FormChatting";
import SettingBackground from "../Settings/SettingBackground";


export default function Chatting() {
    const [userLastMessages, setUserLastMessages] = useState(null);
    const [copyLastMessages, setCopyLastMessages] = useState(null);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState(null);
    const [partnerUser, setPartnerUser] = useState(null);
    const [user, setUser] = useState(null);
    const [previewBackground, setPreviewBackground] = useState(false);
    const [background, setBackground] = useState('/Images/E-Commerce.jpg');
    const [brightness, setBrightness] = useState(null);

    const [SearchParams] = useSearchParams();
    const name = SearchParams.get("name");

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const audio = new Audio('/audios/doraemon_mamikos.mp3');

    const socket = io("http://localhost:3000", {
        withCredentials: true
    })

    const presenter = new ChattingPresenter({
        model: new data(),
        view: {
            setUserLastMessages: setUserLastMessages,
            setPartnerUser: setPartnerUser,
            setUser: setUser,
            setMessage: setMessage,
            setMessages: setMessages,
            setCopyLastMessages: setCopyLastMessages,
            socket: socket
        }
    })

    function handleSearch(e) {
        const query = e.target.value;
        if (query === '') {
            return setUserLastMessages(copyLastMessages);
        }
        console.log("Copy:", copyLastMessages);
        const filterUser = copyLastMessages.filter(value => {
            return value.user.username.toLowerCase().includes(query.toLowerCase()) || value.content.toLowerCase().includes(query);
        })
        setUserLastMessages(filterUser);
    }

    function submit(e) {
        e.preventDefault();
        presenter.createMessage(partnerUser, user, messages, message, userLastMessages);
    }

    // mengambil data dalam 1 kali
    useEffect(() => {
        presenter.getUserFromCookie();
        presenter.getLastMessage();

        const mediaQuery = window.matchMedia('(max-width: 768px)');
        const listener = () => setIsMobile(mediaQuery.matches);
        mediaQuery.addEventListener("change", listener);
        return () => {
            mediaQuery.removeEventListener("change", listener);
        }
    }, []);

    // mengambil data berubah ketika query name berubah
    useEffect(() => {
        if (!name) return;
        presenter.getMessages(name);
        presenter.getPartnerUser(name);
    }, [name]);

    // menerima message dari siaran
    useEffect(() => {
        if (!socket) return;
        socket.on("private_message", (data) => {
            if (messages) {
                console.log(data.message);
                setMessages([...messages, data.message])
            }
        });
        return () => {
            socket.off("private_message", (data) => {
                if (messages) {
                    setMessages([...messages, data.message])
                }
            });
        }
    }, [socket]);
    
    if (previewBackground) {
        return (
            <SettingBackground background={background} setBrightness={setBrightness} setPreview={setPreviewBackground} />
        )
    }

    return (
        <>
            <section className="grid md:grid-cols-[360px_1fr] grid-cols-1">
                <div className={`${isMobile ? name ? 'hidden' : 'block' : ''}`}>
                    <div className="h-full md:w-[360px] w-full fixed h-full border-r-1 border-gray-300">
                        <div className="p-1 bg-blue-400 text-white">
                            <div className="w-full px-1 pt-1 z-2">
                                <div className="flex items-center gap-4 text-lg font-semibold p-1">
                                    <Link to="/"><FaArrowLeft /></Link>
                                    <h3 className="w-full text-center">Chatting</h3>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-y-scroll h-screen scrollbar-hidden">
                            <div className="p-2 bg-blue-400 text-white">
                                <div onInput={handleSearch} className="flex items-center border-1 border-white-400 rounded-full px-2 z-1 mx-3 m-1">
                                    <input type="search" name="search" id="search" autoComplete="off" className="w-full p-2 text-base outline-0 text-white" />
                                    <div className="px-2"><FaSearch /></div>
                                </div>
                            </div>
                            {userLastMessages?.map((value, index) =>
                                <div className={`w-full hover:bg-blue-100 ${name === value.user.username ? 'bg-blue-100' : ''}`} key={index}>
                                    {user && (user.id === value.sender_id) || (user.id === value.receiver_id) ?
                                        <Link to={`/message?name=${value.user.username}`} className="flex items-center w-full p-2 border-1 border-r-0 border-gray-200">
                                            <div className="mr-2">
                                                <img src={value?.profile?.profile_picture || '/Images/profile-default.svg'} className="w-10 h-10 rounded-full object-cover m-2" alt="" />
                                            </div>
                                            <div>
                                                <h2 className="font-semibold text-md">{value.user.username}</h2>
                                                <p className="md:w-[250px] custom-media-w-250 custom-media-w-400 text-base truncate">{value.content}</p>
                                            </div>
                                            <div className="text-sm ml-auto text-blue-600">
                                                <span>12</span>
                                            </div>
                                        </Link> :
                                        <></>}
                                </div>
                            )}
                            <div className="h-300"></div>
                        </div>
                    </div>
                </div>
                {name ?
                    <div className={`${isMobile ? name ? 'block' : 'hidden' : ''}`}>
                        <FormChatting username={name} messages={messages} setMessage={setMessage} message={message} handleSubmit={submit} isMobile={isMobile} brightness={brightness} setBackground={setBackground} background={background} setPreview={setPreviewBackground}  />
                    </div> :
                    <div className="p-10 text-lg font-semibold">
                        <h2>Ayok mulai percakapan</h2>
                    </div>
                }
            </section>
        </>
    )
}