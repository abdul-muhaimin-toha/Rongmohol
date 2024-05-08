import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useArtsFromCategory = (category) => {
  const { data, isPending, refetch, isError, error } = useQuery({
    queryKey: ["arts_from_categories", category],
    queryFn: async () => {
      const response = await axios.get(
        `https://rongmohol-server.vercel.app/arts/categories/${category}`,
      );

      return response.data;
    },
  });

  return { data, isPending, refetch, isError, error };
};

export default useArtsFromCategory;
