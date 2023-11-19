import instance from "@/lib/instance";
import { useQuery } from "@tanstack/react-query";

const fetchHomes = async () => {
  const response = await instance.get("/user/statistic");
  return response.data;
};

export const useHomesData = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchHomes(),
  });
};
