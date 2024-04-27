import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const AllArtTableRow = ({ art, index }) => {
  const {
    _id,
    title,
    category,
    price,
    rating,

    stock_status,
  } = art || {};
  return (
    <tr>
      <th className="text-[#5FA4E6]">{index + 1}</th>
      <td>{title}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{rating}</td>
      <td>{stock_status}</td>
      <td>
        <Link className="flex w-28 items-center justify-center gap-1 bg-[#665DCD] px-2 py-1 text-white">
          <p>View Details</p>
          <FaArrowAltCircleRight />
        </Link>
      </td>
    </tr>
  );
};

export default AllArtTableRow;
