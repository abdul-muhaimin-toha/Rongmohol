import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-362px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
