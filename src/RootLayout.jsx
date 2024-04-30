import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import LocomotiveScroll from "locomotive-scroll";

const RootLayout = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-430px)]">
        <Outlet />
      </div>
      <Footer />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
};

export default RootLayout;
