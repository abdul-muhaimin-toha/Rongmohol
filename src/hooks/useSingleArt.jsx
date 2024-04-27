import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSingleArt = (id) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["art", id],
    queryFn: async () => {
      const response = await axios.get(`http://localhost:3000/arts/${id}`);

      return response.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useSingleArt;
