import { Grid2X2 } from "lucide-react";
import { Link, NavLink } from "react-router";

export default function Dashboard() {

    return (
        <div className="grid grid-cols-[250px_1fr]">
            <div className="">
                <div className="fixed left-0 w-[250px] h-screen bg-gray-100">
                    <ul className="flex flex-col p-1 w-full text-gray-800 font-semibold text-sm">
                        <li>
                            <div className="flex items-center justify-center gap-2 text-xl font-bold p-3">
                                <img src="/Images/logo2.png" alt="" className="w-10 h-10 object-cover" />
                                <h2>BelanjaQu</h2>
                            </div>
                        </li>
                        <li className="border-b-1 border-gray-200 my-1">
                            <h2 className="text-gray-600 py-1">MARKETING</h2>
                        </li>
                        <li>
                            <NavLink to="/" className={(({ isActive }) => isActive ? "flex items-center gap-2 p-2 text-blue-700 bg-blue-200 rounded-md hover:text-blue-700" : "flex items-center gap-2 p-2 rounded-md hover:text-blue-700")}>
                                <Grid2X2 className="w-5 h-5" />Dashboard
                            </NavLink>
                            <NavLink to="/dashboard" className={(({ isActive }) => isActive ? "flex items-center gap-2 p-2 text-blue-700 bg-blue-200 rounded-md hover:text-blue-700" : "flex items-center gap-2 p-2 rounded-md hover:text-blue-700")}>
                                <Grid2X2 className="w-5 h-5" />Dashboard
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full">
                <header className="border-1 h-15 fixed right-0 bg-blue-400 w-[calc(100%-250px)]">Ini header</header>
                <main className="border-1 h-100 mt-15">ini main</main>
                <footer className="border-1 h-30">footer</footer>
            </div>
        </div>
    )
}