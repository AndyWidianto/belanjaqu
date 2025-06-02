import { Outlet } from "react-router";
import HomeNavbar from "../View/Navbar/HomeNavbar";
import NavbarMobile from "../View/Navbar/NavbarMobile";

export default function HomeLayout() {

    return (
        <>
        <header>
            <HomeNavbar />
        </header>
        <main className="pt-20">
            <Outlet />
            <NavbarMobile />
        </main>
        </>
    )
}