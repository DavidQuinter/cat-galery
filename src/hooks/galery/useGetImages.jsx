import { useQuery } from "@tanstack/react-query";
import { getImages } from "../../services/api/images";

export const useGetImages = ({ limit = 12, page = 0 }) => {
  const queryKey = ["images", { limit, page }];

  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey,
    queryFn: () => getImages({ limit, page }),
    keepPreviousData: true,
  });

  return {
    data,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  };
};
