import { useEffect, useState } from "react";
import MyArtCard from "../components/MyArtCard";
import useAuth from "../hooks/useAuth";
import useMyArt from "../hooks/useMyArt";
import { FaChevronDown } from "react-icons/fa6";
import Loader from "../components/Loader";
import { Helmet, HelmetProvider } from "react-helmet-async";

import ErrorPage from "./ErrorPage";

const MyArtPage = () => {
  const { user } = useAuth();
  const { data, isPending, refetch, isError } = useMyArt(user);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    setDisplayData(data);
  }, [data]);

  const handleFilter = (filteredValue) => {
    if (filteredValue === "all") {
      setDisplayData(data);
      return;
    }
    const filteredData = data.filter(
      (art) => art.customizable === filteredValue,
    );
    setDisplayData(filteredData);
  };

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <section>
          <HelmetProvider>
            <Helmet>
              <title>Rongmohol - My Arts</title>
            </Helmet>
          </HelmetProvider>
          <div className="mx-auto mb-16 max-w-screen-2xl px-4 md:mb-28">
            <div className="py-16 text-center md:pt-20">
              <h2 className="mx-auto max-w-xl text-4xl font-semibold uppercase text-black lg:text-5xl dark:text-white">
                Your All Arts
              </h2>
              <div className="mb-0 mt-8 flex justify-center">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="flex items-center gap-2 rounded-sm bg-gradient-bg p-4 text-xs text-white dark:bg-gradient-bg-2"
                  >
                    <FaChevronDown />
                    <span>Filter based on customization</span>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] mt-1.5 flex w-full flex-row rounded-sm bg-gradient-bg p-2 text-black shadow dark:bg-gradient-bg-2"
                  >
                    <li className="flex w-1/3 items-center justify-center transition-all duration-150 hover:text-white">
                      <a onClick={() => handleFilter("yes")}>Yes</a>
                    </li>
                    <li
                      onClick={() => handleFilter("no")}
                      className="flex w-1/3 items-center justify-center transition-all duration-150 hover:text-white"
                    >
                      <a>No</a>
                    </li>
                    <li
                      onClick={() => handleFilter("all")}
                      className="flex w-1/3 items-center justify-center transition-all duration-150 hover:text-white"
                    >
                      <a>Clear</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:mt-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {displayData?.map((art) => (
                <MyArtCard key={art._id} art={art} refetch={refetch} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MyArtPage;
