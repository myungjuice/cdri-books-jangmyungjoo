import api from "@/libs/apis";

import type { GetBooksRequest, GetBooksResponse } from "../types";

export const getBooks = async (params: GetBooksRequest): Promise<GetBooksResponse> => {
  const response = await api.get<GetBooksResponse>("/search/book", {
    params,
  });
  return response.data;
};
