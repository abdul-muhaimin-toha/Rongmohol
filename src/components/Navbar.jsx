import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-screen-2xl pr-3">
        <nav className="navbar">
          <div className="navbar-start items-center justify-start gap-2 ">
            <div className="drawer w-12 lg:hidden">
              <input
                id="my-drawer-3"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content flex flex-col">
                <div className="w-auto">
                  <div className="flex-none lg:hidden">
                    <label
                      htmlFor="my-drawer-3"
                      aria-label="open sidebar"
                      className="btn btn-square btn-ghost"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-6 w-6 stroke-current"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
              <div className="drawer-side">
                <label
                  htmlFor="my-drawer-3"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu min-h-full w-1/3 gap-8 bg-base-200 bg-gradient-bg p-8">
                  <Link className=" text-white outline-none transition-all duration-150 hover:bg-transparent">
                    Home
                  </Link>

                  <Link className=" text-white outline-none transition-all duration-150 hover:bg-transparent">
                    All Art
                  </Link>

                  <Link className=" text-white outline-none transition-all duration-150 hover:bg-transparent">
                    My Art
                  </Link>

                  <Link className=" text-white outline-none transition-all duration-150 hover:bg-transparent">
                    Add Art
                  </Link>

                  <Link className="text-white outline-none transition-all duration-150 hover:bg-transparent md:hidden">
                    Registration
                  </Link>
                </ul>
              </div>
            </div>
            <Link className="flex items-center justify-center gap-3  pl-0 lg:p-2">
              <img src={logo} alt="Rong Mohol Logo" className="h-6" />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-10 text-base font-medium  uppercase">
              <Link className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-[#665DCD]">
                Home
              </Link>

              <Link className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-[#665DCD]">
                All Art
              </Link>

              <Link className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-[#665DCD]">
                My Art
              </Link>

              <Link className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-[#665DCD]">
                Add Art
              </Link>
            </ul>
          </div>
          <div className="navbar-end gap-6">
            <button className="flex items-center justify-center gap-1.5 font-semibold uppercase transition-all duration-150 hover:text-[#665DCD]">
              <div className="h-4 w-4 rounded-full bg-gradient-bg"></div>
              <p>Sign In</p>
            </button>
            <button className="hidden items-center justify-center gap-1.5 font-semibold uppercase transition-all duration-150 hover:text-[#665DCD] md:flex">
              <div className="h-4 w-4 rounded-full bg-gradient-bg"></div>
              <p>Registration</p>
            </button>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
