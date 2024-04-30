import useCategories from "../hooks/useCategories";
import CategoriesCard from "./CategoriesCard";
import SectionHeading from "./SectionHeading";
import Loader from "./Loader";

const Categories = () => {
  const { data, isPending } = useCategories();

  return (
    <>
      {isPending ? (
        <Loader />
      ) : (
        <section>
          <div className="mx-auto max-w-screen-2xl px-4">
            <SectionHeading
              heading="Discover Our Art & Craft Categories"
              subHeading="Dive Into a World of Expression with Our Range of Painting and
          Drawing Categories"
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
              {data?.map((category) => (
                <CategoriesCard key={category._id} category={category} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Categories;
