import { useSearchParams } from "react-router-dom";
import { ParamObject } from "../types";

export const usePagination = (count?: number, newParams?: string) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = (page: number) => {
    let paramObj: ParamObject = {
      _page: `${page}`,
      _limit: `${searchParams.get("_limit")}`,
    };
    if (newParams) {
      paramObj = {
        _page: `${page}`,
        _limit: `${searchParams.get("_limit")}`,
        delivered: newParams,
      };
    }
    setSearchParams(paramObj);
  };

  const pagination = {
    pageSize: Number(searchParams!.get("_limit")),
    defaultCurrent: Number(searchParams!.get("_page")),
    total: count,
    onChange: (page: number) => handlePageChange(page),
  };

  const page = Number(searchParams!.get("_page"));
  const limit = Number(searchParams!.get("_limit"));
  const params = `?_page=${page}&_limit=${limit}`;

  return { params: params, pagination: pagination };
};
