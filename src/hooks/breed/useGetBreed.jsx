import { useQuery } from "@tanstack/react-query";
import { getBreeds } from "../../services/api/breeds";

export const useGetBreeds = ({ limit = 10, page = 0 }) => {
  const queryKey = ["breeds", { limit, page }];

  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey,
    queryFn: () => getBreeds({ limit, page }),
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
