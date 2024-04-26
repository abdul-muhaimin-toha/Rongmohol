import { Link } from "react-router-dom";
import productImage from "../assets/products/product.jpg";
import { FaRegStar, FaDollarSign } from "react-icons/fa";

const ArtDetailsPage = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4">
        <div className=" py-12 md:py-14">
          <h3 className="mb-6 text-2xl font-semibold text-[#5FA4E6] md:text-5xl">
            Celestial Symphony Details
          </h3>
          <div className="flex flex-col justify-between gap-4 md:gap-8 lg:flex-row lg:gap-14">
            <div className="w-full overflow-hidden rounded-md lg:w-4/6">
              <img
                src={productImage}
                alt="Product image"
                className="h-[420px] w-full rounded-md object-cover"
              />
            </div>
            <div className="w-full lg:w-2/6">
              <div className="rounded-lg bg-[#0f0d09] bg-opacity-95 p-3 md:p-5 lg:p-9">
                <div className="mt-6 flex flex-col items-start justify-center">
                  <p className="mb-4 text-xs font-semibold uppercase text-white">
                    Posted by: Abdul Muhaimin Toha
                  </p>
                  <div className="flex w-full flex-wrap items-center justify-between gap-4">
                    <h2 className="texl-lg font-bold uppercase text-white md:text-xl">
                      Celestial Symphony
                    </h2>
                    <h4 className=" rounded-full bg-[#D2AB67] px-2 py-1 text-xs font-semibold text-white md:text-sm">
                      Landscape
                    </h4>
                  </div>

                  <div className="mt-5 flex w-full flex-wrap items-center justify-between gap-6">
                    <div className="justify-left flex flex-wrap items-center gap-3 text-xs md:text-sm ">
                      <div className="flex items-center justify-center gap-1 rounded-full bg-white px-4 py-1 text-black">
                        <h4>4.9</h4>
                        <FaRegStar />
                      </div>
                      <div className="flex items-center justify-center gap-1 rounded-full bg-white px-4 py-1 text-black">
                        <h4>In Stock</h4>
                      </div>
                      <div className="flex items-center justify-center gap-1 rounded-full bg-white px-4 py-1 text-black">
                        <h4>Customizable</h4>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex w-full  flex-wrap items-center justify-between  gap-4">
                    <h4 className="text-xs font-normal text-white md:text-sm">
                      Processing Time: 300 min
                    </h4>
                    <div className="flex items-center justify-center gap-2 text-3xl font-bold text-[#5FA4E6]">
                      <h3>49.5</h3> <FaDollarSign />
                    </div>
                  </div>

                  <p className="mt-5 text-sm text-white">
                    A Journey Through the Stars" - An abstract painting inspired
                    by the cosmic dance of galaxies and constellations, evoking
                    a sense of wonder and awe.
                  </p>
                  <Link className="mt-6 w-full rounded-md bg-gradient-bg px-5 py-3 text-center font-semibold uppercase transition-all duration-150 hover:text-white">
                    Update Information
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtDetailsPage;
