import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllArt = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["arts_all"],
    queryFn: async () => {
      const response = await axios.get(
        "https://rongmohol-server.vercel.app/arts-all",
      );

      return response.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useAllArt;
