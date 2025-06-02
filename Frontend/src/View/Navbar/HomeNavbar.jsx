import { Link, useLocation, useNavigation, useRoutes } from "react-router";
import { FaCartPlus, FaUser, FaComment, FaSearch } from "react-icons/fa";


export default function HomeNavbar() {
    const location = useLocation();
    return (
        <>
            <div className="fixed w-full bg-white">
                <nav className="flex gap-4 justify-between items-center py-1 text-md font-normal shadow-lg bg-white">
                    <Link to="/" className="md:flex items-center md:w-20">
                        <img src="/public/Images/logo.png" className="w-10 object-cover" alt="logo E-Commerce" />
                        <h3 className="hidden md:block font-semibold text-lg">BelanjaQu</h3>
                    </Link>
                    <ul className="flex gap-4 w-full md:w-[60%] items-center">
                        <li><Link to="/" className={`p-1 px-4 hidden md:block ${location.pathname === '/' ? 'font-semibold' : ''}`} >Home</Link></li>
                        <li><Link to="/categories" className={`p-1 px-4 hidden md:block ${location.pathname === '/categories' ? 'font-semibold' : ''}`}>Categoris</Link></li>
                        <li className="w-full md:pl-3 rounded-full border border-gray-400">
                            <form className="flex items-center">
                                <input type="search" name="" id="" className="w-full outline-0" />
                                <button type="submit" className="p-3 px-4 rounded-r-full text-white bg-blue-400 cursor-pointer"><FaSearch /></button>
                            </form>
                        </li>
                    </ul>
                    <ul className="flex gap-4 items-center md:mr-20">
                        <li>
                            <Link to="message" className="p-2"><FaComment /></Link>
                        </li>
                        <li className="hidden md:block">
                            <Link className="flex gap-1 items-center p-2 px-4" to="profile"><FaUser /> <span>account</span></Link>
                        </li>
                        <li>
                            <Link to="carts" className="p-2"><FaCartPlus /></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}