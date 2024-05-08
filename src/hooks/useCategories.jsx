import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCategories = () => {
  const { data, isPending, refetch } = useQuery({
    queryKey: ["art_categories"],
    queryFn: async () => {
      const response = await axios.get(
        "https://rongmohol-server.vercel.app/arts-categories",
      );

      return response.data;
    },
  });

  return { data, isPending, refetch };
};

export default useCategories;
