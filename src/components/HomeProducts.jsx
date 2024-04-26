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
          <HomeProductCard />
          <HomeProductCard />
          <HomeProductCard />
          <HomeProductCard />
          <HomeProductCard />
          <HomeProductCard />
        </div>
      </div>
    </section>
  );
};

export default HomeProducts;
