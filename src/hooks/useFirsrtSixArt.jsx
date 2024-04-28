import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFirstSixArt = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["arts_first_six"],
    queryFn: async () => {
      const response = await axios.get(
        "https://rongmohol-server.vercel.app/arts-first-six",
      );

      return response.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useFirstSixArt;
