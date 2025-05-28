import { Link } from "react-router";
import { FaCartPlus, FaUser, FaComment } from "react-icons/fa";


export default function HomeNavbar() {

    return (
        <>
        <div className="pb-2 fixed w-[100%]">
            <nav className="flex p-1 justify-between items-center text-lg font-normal shadow-lg bg-white">
                <Link to="/" className="flex items-center w-20">
                    <img src="/public/Images/logo.jpg" className="w-10 h-10" alt="logo E-Commerce" />
                    <h3>Happy</h3>
                </Link>
                <ul className="flex gap-4">
                    <li><Link to="/" className="p-2 px-4" >Home</Link></li>
                    <li><Link to="/categories" className="p-2 px-4" >Categoris</Link></li>
                    <li><Link to="/delivery" className="p-2 px-4" >Delivery</Link></li>
                </ul>
                <ul className="flex gap-4 items-center mx-20">
                    <li>
                        <Link className="p-2"><FaComment/></Link>
                    </li>
                    <li>
                        <Link className="flex gap-1 items-center p-2 px-4"><FaUser/> account</Link>
                    </li>
                    <li>
                        <Link className="p-2"><FaCartPlus/></Link>
                    </li>
                </ul>
            </nav>
        </div>
        </>
    )
}