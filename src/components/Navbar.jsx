import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import defaultUser from "../assets/user_default.png";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogOut = () => {
    logout()
      .then(() => {
        toast("Successfully log out", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((error) => {
        console.error(error.message);
        toast("Log out failed", {
          icon: "❌",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      });
  };

  return (
    <section className="dark:bg-gradient-bg-2 sticky right-0 top-0 z-50 bg-gradient-bg">
      <div className="mx-auto max-w-screen-2xl pr-3">
        <nav className="navbar">
          <div className="navbar-start items-center justify-start gap-2 ">
            <div className="drawer z-40 w-12 lg:hidden">
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
                        className="inline-block h-6 w-6 stroke-current text-white"
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
                <ul className="dark:bg-gradient-bg-2 menu min-h-full w-2/3 gap-8 bg-base-200 bg-gradient-bg p-8 text-black">
                  <Link to="/" className="justify-left flex items-center">
                    <img src={logo} alt="Rong Mohol Logo" className="h-5" />
                  </Link>
                  <Link
                    to="/"
                    className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-white"
                  >
                    Home
                  </Link>

                  <Link
                    to="all-arts"
                    className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-white"
                  >
                    All Arts
                  </Link>

                  <Link
                    to="arts-db"
                    className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-white"
                  >
                    Arts DB
                  </Link>

                  <Link
                    to="my-arts"
                    className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-white"
                  >
                    My Arts
                  </Link>

                  <Link
                    to="/add-art"
                    className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-white"
                  >
                    Add Art
                  </Link>

                  {!user && (
                    <Link
                      to="/registration"
                      className="outline-none transition-all duration-150 hover:bg-transparent hover:text-white md:hidden"
                    >
                      Registration
                    </Link>
                  )}
                </ul>
              </div>
            </div>
            <Link
              to="/"
              className="flex items-center justify-center gap-3  pl-0 lg:p-2"
            >
              <img
                src={logo}
                alt="Rong Mohol Logo"
                className="ml-2 h-6 lg:ml-0"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-10 text-base font-medium uppercase text-black">
              <Link
                to="/"
                className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-white"
              >
                Home
              </Link>

              <Link
                to="all-arts"
                className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-white"
              >
                All Arts
              </Link>

              <Link
                to="arts-db"
                className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-white"
              >
                Arts DB
              </Link>

              <Link
                to="my-arts"
                className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-white"
              >
                My Arts
              </Link>

              <Link
                to="/add-art"
                className=" outline-none transition-all duration-150 hover:bg-transparent hover:text-white"
              >
                Add Art
              </Link>
            </ul>
          </div>
          <div className="navbar-end gap-6">
            {user ? (
              <div title={user.displayName} className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar btn btn-circle btn-ghost"
                >
                  <div className="w-9 rounded-full ring-2 ring-blue-400">
                    <img alt="User Image" src={user.photoURL || defaultUser} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dark:bg-gradient-bg-2 menu dropdown-content menu-sm z-[1] mt-3 w-52  space-y-1 rounded-sm bg-base-100 bg-gradient-bg p-2 text-black shadow"
                >
                  <li>
                    <p>{user.displayName}</p>
                  </li>
                  <li>
                    <button className="hover:text-white" onClick={handleLogOut}>
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center justify-center gap-6">
                <Link
                  to="/sign-in"
                  className="flex items-center justify-center gap-1.5 font-semibold uppercase text-white transition-all duration-150 hover:text-black"
                >
                  <div className="bg-gradient-bg-2 h-4 w-4 rounded-full dark:bg-gradient-bg"></div>
                  <p>Sign In</p>
                </Link>
                <Link
                  to="registration"
                  className="hidden items-center justify-center gap-1.5 font-semibold uppercase text-white transition-all duration-150 hover:text-[black] md:flex"
                >
                  <div className="h-4 w-4 rounded-full bg-gradient-bg dark:bg-gradient-bg"></div>
                  <p>Registration</p>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
