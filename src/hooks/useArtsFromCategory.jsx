import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useArtsFromCategory = (category) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["arts_by_category", category],
    queryFn: async () => {
      const response = await axios.get(
        `https://rongmohol-server.vercel.app/arts-by-category/${category}`,
      );

      return response.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useArtsFromCategory;
