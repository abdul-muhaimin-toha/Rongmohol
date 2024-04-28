import { Link } from "react-router-dom";
import { FaRegStar, FaDollarSign } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyArtCard = ({ art, refetch }) => {
  const {
    _id,
    title,
    category,
    description,
    price,
    rating,
    customizable,
    stock_status,
    img_URL,
  } = art || {};

  const handleArtDelete = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#D2AB67",
      cancelButtonColor: "#000",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://rongmohol-server.vercel.app/arts/${_id}`)
          .then((response) => {
            console.log(response.data);
            if (response.data.deletedCount > 0) {
              refetch();
              toast("Art deleted successfully", {
                icon: "👏",
                style: {
                  borderRadius: "10px",
                  background: "#D2AB67",
                  color: "#000",
                },
              });
            }
          })
          .catch(function (error) {
            console.error(error.message);
            toast("Update failed, try again!", {
              icon: "❌",
              style: {
                borderRadius: "10px",
                background: "#D2AB67",
                color: "#000",
              },
            });
          });
      }
    });
  };

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
          <div className="flex  w-full flex-wrap items-start justify-between gap-3 md:min-h-16 xl:min-h-10 2xl:min-h-8">
            <h2 className="text-xl font-bold uppercase text-white">{title}</h2>
            <h4 className="rounded-full bg-[#D2AB67] px-2 py-1 text-xs font-semibold capitalize text-white dark:bg-[#119464]">
              {category}
            </h4>
          </div>
          <div className="flex w-full flex-wrap items-center  justify-between gap-3">
            <div className="flex items-center justify-center gap-3  text-xs">
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
            <p className="my-3 rounded-sm bg-[#D2AB67] px-2 py-1 text-xs capitalize italic text-white dark:bg-[#119464]">
              Customizable: {customizable}
            </p>
            <Link
              to={`/update-art/${_id}`}
              className="w-full rounded-md bg-gradient-bg py-3 text-center  font-semibold uppercase text-black transition-all duration-150 hover:text-white dark:bg-gradient-bg-2"
            >
              Update Art Information
            </Link>
            <button
              onClick={handleArtDelete}
              className="w-full rounded-md bg-gradient-bg py-3 text-center font-semibold uppercase text-black transition-all duration-150 hover:text-white dark:bg-gradient-bg-2"
            >
              Delete Art
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtCard;
