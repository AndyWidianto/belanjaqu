import { Bell, Clapperboard, Home, PlusCircle } from "lucide-react";
import { FaHome, FaLayerGroup, FaUser } from "react-icons/fa";
import { Link } from "react-router";

export default function NavbarMobile() {

    return (
        <>
            <div className="block md:hidden fixed left-0 bottom-0 z-99 w-full bg-white">
                <ul className="flex items-center justify-around p-2 text-lg border-t-1 border-gray-300">
                    <li>
                        <Link><Home /></Link>
                    </li>
                    <li>
                        <Link><Clapperboard /></Link>
                    </li>
                    <li>
                        <Link><PlusCircle /></Link>
                    </li>
                    <li>
                        <Link><Bell /></Link>
                    </li>
                    <li>
                        <Link><FaUser /></Link>
                    </li>
                </ul>
            </div>
        </>
    )
}