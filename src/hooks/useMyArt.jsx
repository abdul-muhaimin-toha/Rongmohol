import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useMyArt = (user) => {
  const { data, isPending, refetch, error, isError } = useQuery({
    queryKey: ["arts_users", user],
    queryFn: async () => {
      const response = await axios.get(
        `https://rongmohol-server.vercel.app/arts/users/${user.email}`,
      );

      return response.data;
    },
  });

  return { data, isPending, refetch, error, isError };
};

export default useMyArt;
