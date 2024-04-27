import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMyArt = (user) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["my_arts", user],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/my-arts${user.email}`,
      );

      return response.data;
    },
  });

  return { data, isLoading, refetch };
};

export default useMyArt;
