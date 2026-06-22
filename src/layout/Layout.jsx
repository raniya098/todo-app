import { Link, Outlet } from "react-router";
function Layout() {
    return(
        <>
        <div>
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/counter"}>Counter</Link >
        </div>
        <Outlet />
        <div>
            </div>
        </>
    )
}
export default Layout;
