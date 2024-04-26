import { Link } from "react-router-dom";
import HomeProductCard from "./HomeProductCard";
import SectionHeading from "./SectionHeading";

const HomeProducts = () => {
  return (
    <section className="mb-20">
      <div className="mx-auto max-w-screen-2xl px-4">
        <SectionHeading
          heading="Unveiling Our Top Rated Products"
          subHeading="Experience Excellence with Our Handpicked Selection of Must-Have Art Supplies and Tools"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          <HomeProductCard />
          <HomeProductCard />
          <HomeProductCard />
          <HomeProductCard />
          <HomeProductCard />
          <HomeProductCard />
        </div>
        <div className="mt-10 flex justify-center">
          <Link className="rounded-md bg-gradient-bg px-5 py-3 font-semibold uppercase transition duration-150 hover:text-white">
            Explore More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
