import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";

const AllArtTableRow = () => {
  return (
    <tr>
      <th className="text-[#5FA4E6]">1</th>
      <td>Celestial Symphony</td>
      <td>Landscape</td>
      <td>49.5</td>
      <td>4.9</td>
      <td>In Stock</td>
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
