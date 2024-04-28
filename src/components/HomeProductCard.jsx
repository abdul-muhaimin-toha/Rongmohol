import { Link } from "react-router-dom";
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
        backgroundImage: `url(${img_URL})`,
      }}
      className="flex rounded-lg bg-cover shadow-lg"
    >
      <div className="flex grow flex-col gap-6 rounded-lg bg-black bg-opacity-90 p-4 md:gap-10">
        <img
          src={img_URL}
          alt="Product image"
          className="h-64 w-full rounded-lg object-cover shadow-lg"
        />
        <div className="flex flex-col items-start justify-center gap-3">
          <div className="flex  w-full flex-wrap items-start justify-between gap-3 md:min-h-16 xl:min-h-16 2xl:min-h-8">
            <h2 className="text-xl font-bold uppercase text-white">{title}</h2>
            <h4 className="rounded-full bg-[#D2AB67] px-2 py-1 text-xs font-semibold text-white">
              {category}
            </h4>
          </div>
          <div className="flex w-full flex-wrap items-center justify-between gap-3">
            <div className="flex items-center justify-center gap-3 text-xs">
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
            <p className="my-3 text-xs text-white md:min-h-20 lg:min-h-24 xl:min-h-20 2xl:min-h-12">
              {description}
            </p>
            <Link
              to={`/art-details/${_id}`}
              className="w-full rounded-md bg-gradient-bg py-3 text-center  font-semibold uppercase transition-all duration-150 hover:text-white"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProductCard;
