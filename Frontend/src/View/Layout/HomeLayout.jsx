import { Outlet } from "react-router";
import HomeNavbar from "../Navbar/HomeNavbar";
import NavbarMobile from "../Navbar/NavbarMobile";

export default function HomeLayout() {

    return (
        <>
        <header>
            <HomeNavbar />
        </header>
        <main className="pt-18">
            <Outlet />
            <NavbarMobile />
        </main>
        </>
    )
}