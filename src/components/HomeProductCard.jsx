import { Link } from "react-router-dom";
import productImage from "../assets/products/product.jpg";
import { FaRegStar, FaDollarSign } from "react-icons/fa";

const HomeProductCard = ({ art }) => {
  const {
    _id,
    title,
    category,
    description,
    price,
    rating,
    customizable,
    processing_time,
    stock_status,
    img_URL,
    posted_by_name,
    posted_by_email,
  } = art || {};

  return (
    <div
      style={{
        backgroundImage: `url(${img_URL || "/src/assets/products/product.jpg"})`,
      }}
      className="flex rounded-lg bg-cover shadow-lg"
    >
      <div className="flex flex-col rounded-lg bg-[#0f0d09] bg-opacity-95 p-3 md:p-5 lg:p-8">
        <img
          src={img_URL}
          alt="Product image"
          className="h-72 w-full rounded-lg object-cover shadow-lg"
        />
        <div className="mt-6 flex flex-col items-start justify-center">
          <div className="flex w-full flex-wrap items-center justify-between gap-4">
            <h2 className="texl-lg font-bold uppercase text-white md:text-xl">
              {title}
            </h2>
            <h4 className=" rounded-full bg-[#D2AB67] px-2 py-1 text-xs font-semibold text-white md:text-sm">
              {category}
            </h4>
          </div>

          <div className="mt-5 flex w-full flex-wrap items-center justify-between gap-6">
            <div className="flex items-center justify-center gap-4 text-xs md:text-sm ">
              <div className="flex items-center justify-center gap-1 rounded-full bg-white px-4 py-1 text-black">
                <h4>{rating}</h4>
                <FaRegStar />
              </div>
              <div className="flex items-center justify-center gap-1 rounded-full bg-white px-4 py-1 text-black">
                <h4>{stock_status}</h4>
              </div>
            </div>
            <div className=" flex items-center justify-center gap-1 text-2xl font-bold text-white">
              <h3>{price}</h3> <FaDollarSign />
            </div>
          </div>
          <p className="mt-6 grow text-sm text-white">{description}</p>
          <Link className="mt-6 w-full rounded-md bg-gradient-bg px-5 py-3 text-center font-semibold uppercase transition-all duration-150 hover:text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProductCard;
