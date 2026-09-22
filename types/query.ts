import { UseQueryOptions } from "@tanstack/react-query";

export type QueryOptions<TQueryFnData, TError, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData>,
  "queryKey" | "queryFn"
>;
