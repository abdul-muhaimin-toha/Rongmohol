import CategoriesCard from "./CategoriesCard";
import SectionHeading from "./SectionHeading";

const Categories = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl p-4">
        <SectionHeading
          heading="Discover Our Art & Craft Categories"
          subHeading="Dive Into a World of Expression with Our Range of Painting and
            Drawing Categories"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
          <CategoriesCard />
        </div>
      </div>
    </section>
  );
};

export default Categories;
