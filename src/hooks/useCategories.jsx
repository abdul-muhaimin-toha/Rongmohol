import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategories = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["art_categories"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/art-categories");

      return response.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useCategories;
