import { Outlet } from "react-router";

const MainLayout = () => {
    return (
        <div className="container w-full mx-auto ">
            {/* <Navbar></Navbar> */}
            <div className="min-h-[calc(100vh-368px)]">
            <Outlet />
          </div>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default MainLayout;