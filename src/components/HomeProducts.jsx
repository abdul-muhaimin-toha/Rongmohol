import { Link } from "react-router-dom";
import HomeProductCard from "./HomeProductCard";
import SectionHeading from "./SectionHeading";
import { FaArrowAltCircleRight } from "react-icons/fa";
import useFirsrtSixArt from "../hooks/useFirsrtSixArt";
import Loader from "./Loader";

const HomeProducts = () => {
  const { data, isPending } = useFirsrtSixArt();

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <section>
          <div className="mx-auto max-w-screen-2xl px-4">
            <SectionHeading
              heading="Unveiling Our Top Rated Products"
              subHeading="Experience Excellence with Our Handpicked Selection of Must-Have Art Supplies and Tools"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {data?.map((art) => (
                <HomeProductCard key={art._id} art={art} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link
                to="/all-arts"
                className=" flex items-center justify-center gap-4 rounded-md px-5 py-3 font-semibold uppercase text-black transition duration-150 hover:text-[#5FA4E6] dark:text-white"
              >
                <p>Explore More</p>
                <FaArrowAltCircleRight />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HomeProducts;
