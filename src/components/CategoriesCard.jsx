import { FaArrowAltCircleRight } from "react-icons/fa";

const CategoriesCard = () => {
  return (
    <div className="bg-categories-1 rounded-lg bg-cover text-white">
      <div className="flex flex-col rounded-lg bg-[#665DCD] bg-opacity-80 p-10 md:p-12">
        <h3 className="mb-6 text-3xl font-bold uppercase md:text-4xl">
          Landscape Painting
        </h3>
        <p className="flex-grow text-base font-normal md:text-base">
          Immerse yourself in the beauty of nature with our collection of
          landscape painting essentials. From rolling hills to serene seascapes,
          capture the essence of the great outdoors with every brushstroke.
        </p>
        <div className="mt-6 flex items-center justify-start gap-2  font-bold uppercase">
          <p>Expolore</p>
          <FaArrowAltCircleRight />
        </div>
      </div>
    </div>
  );
};

export default CategoriesCard;
