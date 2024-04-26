import { Link } from "react-router-dom";
import productImage from "../assets/products/product.jpg";
import { FaRegStar, FaDollarSign } from "react-icons/fa";

const HomeProductCard = () => {
  return (
    <div className=" bg-categories-1 rounded-lg bg-cover shadow-lg">
      <div className="rounded-lg bg-[#0f0d09] bg-opacity-95 p-3 md:p-5 lg:p-8">
        <img
          src={productImage}
          alt="Product Image"
          className="h-72 w-full rounded-lg object-cover shadow-lg"
        />
        <div className="mt-6 flex flex-col items-start justify-center">
          <div className="flex w-full flex-wrap items-center justify-between gap-4">
            <h2 className="texl-lg font-bold uppercase text-white md:text-xl">
              Celestial Symphony
            </h2>
            <h4 className=" rounded-full bg-[#D2AB67] px-2 py-1 text-xs font-semibold text-white md:text-sm">
              Landscape
            </h4>
          </div>

          <div className="mt-5 flex w-full flex-wrap items-center justify-between gap-6">
            <div className="flex items-center justify-center gap-4 text-xs md:text-sm ">
              <div className="flex items-center justify-center gap-1 rounded-full bg-white px-4 py-1 text-black">
                <h4>4.9</h4>
                <FaRegStar />
              </div>
              <div className="flex items-center justify-center gap-1 rounded-full bg-white px-4 py-1 text-black">
                <h4>Available</h4>
              </div>
            </div>
            <div className=" flex items-center justify-center gap-1 text-2xl font-bold text-white">
              <h3>49.5</h3> <FaDollarSign />
            </div>
          </div>
          <p className="mt-6 text-sm text-white">
            A Journey Through the Stars" - An abstract painting inspired by the
            cosmic dance of galaxies and constellations, evoking a sense of
            wonder and awe.
          </p>
          <Link className="mt-6 w-full rounded-md bg-gradient-bg px-5 py-3 text-center font-semibold uppercase transition-all duration-150 hover:text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProductCard;
