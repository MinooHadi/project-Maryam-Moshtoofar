import { useSearchParams } from "react-router-dom";

export const usePagination = (count?: number) => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log([...searchParams]);

  const handlePageChange = (page: number) => {
    setSearchParams({
      _page: `${page}`,
      _limit: `${searchParams.get("_limit")}`,
    });
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
