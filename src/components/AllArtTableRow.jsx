import { Link } from "react-router-dom";

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
        <Link className="text-[#665DCD]">View Details</Link>
      </td>
    </tr>
  );
};

export default AllArtTableRow;
