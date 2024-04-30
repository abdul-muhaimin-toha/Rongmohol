import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useAllArt = () => {
  const { data, isPending, refetch } = useQuery({
    queryKey: ["arts_all"],
    queryFn: async () => {
      const response = await axios.get(
        "https://rongmohol-server.vercel.app/arts",
      );

      return response.data;
    },
  });

  return { data, isPending, refetch };
};

export default useAllArt;
