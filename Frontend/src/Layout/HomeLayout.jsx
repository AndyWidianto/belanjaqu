import { Outlet } from "react-router";
import HomeNavbar from "../View/Navbar/HomeNavbar";

export default function HomeLayout() {

    return (
        <>
        <header>
            <HomeNavbar />
        </header>
        <main>
            <Outlet />
        </main>
        </>
    )
}