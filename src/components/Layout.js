import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <main className="main-wrapper">
            <Outlet />
        </main>
    )
}

export default Layout
