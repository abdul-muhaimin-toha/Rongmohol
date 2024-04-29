import { Link, useParams } from "react-router-dom";
import useSingleArt from "../hooks/useSingleArt.jsx";
import { FaRegStar, FaDollarSign } from "react-icons/fa6";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Loader from "../components/Loader";

const ArtDetailsPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useSingleArt(id);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <div className="mx-auto max-w-screen-2xl px-4">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-center py-20">
              <h2 className="mx-auto mb-12  max-w-4xl text-center text-4xl font-semibold uppercase text-black md:text-5xl dark:text-white">
                Details of {data?.title}
              </h2>
              <div className="grid grid-cols-1 items-stretch justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
                <img
                  src={data?.img_URL}
                  alt="Product image"
                  className="col-span-1  w-full border-spacing-4 rounded-lg object-cover shadow-lg ring-4 ring-blue-400"
                />
                <div
                  style={{
                    backgroundImage: `url(${data?.img_URL})`,
                  }}
                  className="col-span-1 flex rounded-lg bg-cover shadow-lg lg:col-span-2"
                >
                  <div className="flex grow flex-col gap-6 rounded-lg bg-black bg-opacity-90 p-4 md:gap-10 lg:p-8">
                    <div className="flex flex-col items-start justify-center gap-3">
                      <div className="flex  w-full flex-wrap items-start justify-between gap-3">
                        <h2 className="text-xl font-bold uppercase text-white">
                          {data?.title}
                        </h2>
                        <h4 className="rounded-full bg-[#D2AB67] px-2 py-1 text-xs font-semibold capitalize text-white dark:bg-[#119464]">
                          {data?.category}
                        </h4>
                      </div>
                      <div className="flex w-full flex-wrap items-center  justify-between gap-3">
                        <div className="flex items-center justify-center gap-3  text-xs">
                          <div className="flex items-center justify-center gap-1 rounded-full bg-white px-4 py-1 text-black">
                            <h4>{data?.rating}</h4>
                            <FaRegStar />
                          </div>
                          <div className="flex items-center justify-center gap-1 rounded-full bg-white px-4 py-1 capitalize text-black">
                            <h4>{data?.stock_status}</h4>
                          </div>
                        </div>
                        <div className=" flex items-center justify-center gap-1 text-2xl font-bold text-white">
                          <h3>{data?.price}</h3> <FaDollarSign />
                        </div>
                        <p className="my-3 text-xs text-white">
                          {data?.description}
                        </p>
                        <div className="my-3 flex flex-wrap gap-4">
                          <p className=" rounded-sm bg-[#D2AB67] px-2 py-1 text-xs capitalize italic text-white dark:bg-[#119464]">
                            Customizable: {data?.customizable}
                          </p>
                          <p className=" rounded-sm bg-[#D2AB67] px-2 py-1 text-xs capitalize italic text-white dark:bg-[#119464]">
                            Processing Time: {data?.processing_time} min
                          </p>
                          <p className=" rounded-sm bg-[#665DCD] px-2 py-1 text-xs capitalize italic text-white dark:bg-[#119464]">
                            Artist: {data?.posted_by_name}
                          </p>
                          <p className=" rounded-sm bg-[#5FA4E6] px-2 py-1 text-xs capitalize italic text-white dark:bg-[#417763]">
                            Email: {data?.posted_by_email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/"
                className="mt-8 flex items-center justify-center gap-4 rounded-md px-5 py-3 font-semibold uppercase text-black transition duration-150 hover:text-[#5FA4E6] md:self-end dark:text-white"
              >
                <FaRegArrowAltCircleLeft />
                <p>Go Back Home</p>
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ArtDetailsPage;
