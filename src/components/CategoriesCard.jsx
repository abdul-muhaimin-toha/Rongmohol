import { FaArrowAltCircleRight } from "react-icons/fa";

const CategoriesCard = ({ category }) => {
  const { name, description, image_URL } = category || {};

  return (
    <div
      style={{
        backgroundImage: `url(${image_URL || "/src/assets/categories/category-landscape.jpg"})`,
      }}
      className="flex overflow-hidden rounded-lg bg-cover text-white"
    >
      <div className="flex flex-col rounded-lg bg-[#665DCD] bg-opacity-85 p-8  lg:p-10">
        <h3 className="mb-8 text-3xl font-bold uppercase md:mb-0 md:min-h-28 md:text-4xl">
          {name}
        </h3>
        <p className="text-base font-normal md:min-h-36 md:text-base lg:min-h-48 xl:min-h-36">
          {description}
        </p>
        <div className="mt-8 flex items-center  justify-start gap-2 font-bold  uppercase md:mt-4 lg:mt-6">
          <p>Expolore</p>
          <FaArrowAltCircleRight />
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
