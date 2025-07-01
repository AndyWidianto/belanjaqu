import { Link, NavLink, useLocation, useNavigate } from "react-router";
import { FaCartPlus, FaUser, FaComment, FaSearch } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { FaBell } from "react-icons/fa6";
import { Bell, Clapperboard, Grid3x3, Heart, Home, MessageCircle, MessageCircleMore, Search, ShoppingCartIcon, User, UserPlus2 } from "lucide-react";


export default function HomeNavbar() {
    const location = useLocation();
    const navigate = useNavigate()
    const [search, setSearch] = useState(null);

    const [dropdownMenu, setDropdownMenu] = useState(false);
    const refDropdownMenu = useRef();

    function handleSerach(e) {
        e.preventDefault();
        navigate(`/search/${search}`);
    }
    function handleClickOutside(e) {
        if (refDropdownMenu.current && !refDropdownMenu.current.contains(e.target)) {
            setDropdownMenu(false);
        }
    }
    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);
        window.addEventListener('scroll', handleClickOutside, true);
        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleClickOutside, true);
        };
    }, [dropdownMenu]);

    return (
        <>
            <div className="fixed w-full bg-white top-0 z-99">
                <nav className="flex gap-1 sm:gap-4 justify-between items-center py-1 text-md px-2 sm:px-0 font-normal shadow-lg bg-white">
                    <ul className="flex gap-1 w-full md:w-full items-center">
                        <li>
                            <Link to="/" className="md:flex items-center">
                                <img src="/public/Images/logo.png" className="w-10 object-cover" alt="logo E-Commerce" />
                                {/* <h3 className="hidden md:block font-semibold text-lg">BelanjaQu</h3> */}
                            </Link>
                        </li>
                        <li className="md:block p-1 px-4 hidden">
                            <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : ''} >
                                <div className="flex items-center gap-1">
                                    <Home className="w-4 h-4" />
                                    <span>Home</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="p-1 px-4 hidden md:block">
                            <NavLink to="/categories" className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : ""}>
                                <div className="flex items-center gap-1">
                                    <Grid3x3 className="w-4 h-4" />
                                    <span>Categoris</span>
                                </div>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <form className="flex items-center relative" onSubmit={handleSerach}>
                                <button type="submit" className="absolute left-2 cursor-pointer text-gray-500"><Search className="w-5 h-5" /></button>
                                <input type="search" name="search" id="search" className="w-full bg-blue-100 rounded-full focus:outline-blue-500 p-2 pr-2 pl-8" onChange={(e) => setSearch(e.target.value)} />
                            </form>
                        </li>
                    </ul>
                    <ul className="flex md:gap-2 items-center md:mr-5">
                        <li>
                            <Link to="message" className="p-2"><MessageCircleMore /></Link>
                        </li>
                        <li className="hidden md:block">
                            <Link to="message" className="p-2"><Clapperboard /></Link>
                        </li>
                        <li>
                            <div className="relative hidden md:block" ref={refDropdownMenu}>
                                <button className="p-2 flex items-center" onClick={() => setDropdownMenu(!dropdownMenu)}>
                                    <Bell />
                                    <div className="custom-text-sm rounded-full p-1 text-white bg-red-400 absolute right-0">12</div>
                                </button>
                                <ul id="dropdownMenu" className={`block absolute right-0 w-100 overflow-hidden overflow-y-scroll scrollbar-hidden bg-white border-gray-500 transition-all duration-200 linear ${dropdownMenu ? 'border-1 max-h-100' : 'max-h-0'}`}>
                                    <li>
                                        <button className="flex items-center gap-2 w-full border-b-1 p-2 text-start border-gray-400 bg-blue-100">
                                            <div className="relative w-12 h-12 shrink-0">
                                                <img src="/Images/gambar_saya.jpg" alt="" className="absolute z-5 w-full h-full object-cover rounded-full" />
                                                <div className="flex items-center absolute bottom-0 right-0 z-10 p-[2px] border-1 border-gray-100 bg-white text-red-600 rounded-full">
                                                    <Heart className="w-4 h-4" />
                                                </div>
                                            </div>
                                            <div className="p-2">
                                                <h2 className="font-semibold text-blue-600">Andy Widianto <span className="font-base text-sm text-gray-600">Telah Menyukai postingan anda</span></h2>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="flex items-center gap-2 w-full border-b-1 p-2 text-start border-gray-400 bg-blue-100">
                                            <div className="relative w-12 h-12 shrink-0">
                                                <img src="/Images/gambar_saya.jpg" alt="" className="absolute z-5 w-full h-full object-cover rounded-full" />
                                                <div className="flex items-center absolute bottom-0 right-0 z-10 p-[2px] border-1 border-gray-100 bg-white text-blue-600 rounded-full">
                                                    <MessageCircle className="w-4 h-4" />
                                                </div>
                                            </div>
                                            <div className="p-2">
                                                <h2 className="font-semibold text-blue-600">Andy Widianto <span className="font-base text-sm text-gray-600">Memberi ulasan: "Product yang bagus dan sangat halus kainnya"</span></h2>
                                            </div>
                                        </button>
                                    </li>
                                    <li>
                                        <button className="flex items-center gap-2 w-full border-b-1 p-2 text-start border-gray-400 bg-blue-100">
                                            <div className="relative w-12 h-12 shrink-0">
                                                <img src="/Images/gambar_saya.jpg" alt="" className="absolute z-5 w-full h-full object-cover rounded-full" />
                                                <div className="flex items-center absolute bottom-0 right-0 z-10 p-[2px] border-1 border-gray-100 bg-white text-green-600 rounded-full">
                                                    <UserPlus2 className="w-4 h-4" />
                                                </div>
                                            </div>
                                            <div className="p-2">
                                                <h2 className="font-semibold text-blue-600">Andy Widianto <span className="font-base text-sm text-gray-600">Mengikuti anda</span></h2>
                                            </div>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="hidden md:block text-blue-600" hidden>
                            <Link className="flex gap-1 items-center p-2 px-4" to="profile"><User /> <span>account</span></Link>
                        </li>
                        <li className="hidden md:block w-10 h-10">
                            <Link to="/profile" className="rounded-full">
                                <img src="/Images/profile-default.svg" alt="profile" className="object-cover w-10 h-10" />
                            </Link>
                        </li>
                        <li>
                            <NavLink to="carts" className={({ isActive }) => isActive ? "text-blue-600" : ""}>
                                <div className="p-2">
                                    <ShoppingCartIcon />
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}