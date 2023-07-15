import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navigation from "./Navigation"

const Layout = () => {
    return (
        <main className="main-wrapper">
            <Navigation />
            <Outlet />
            <Footer />
        </main>
    )
}

export default Layout
