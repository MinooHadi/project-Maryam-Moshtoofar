import { URLSearchParams } from "url";
import { Params } from "../types";

export const GenerateParams = (params: Params) => {
  let queryParams: any = {
    _page: params.pagination?.current,
    _limit: params.pagination?.pageSize,
    _sort: params.sortField,
    _order: params.sortOrder,
  };
  if (params.delivered?.length === 1) {
    queryParams = {
      ...queryParams,
      delivered: params.delivered[0],
    };
  }
  if (params.category?.length === 1) {
    queryParams = {
      ...queryParams,
      category: params.category[0],
    };
  }

  return queryParams;
};

export const GenerateImageURLs = (images: string[]) =>
  images.map((image) => {
    return {
      uid: image,
      name: image,
      url: `http://localhost:3002/files/${image}`,
    };
  });

export const generateTableConfig = (params: URLSearchParams, count: number) => {
  const queryParams = {
    pagination: {
      current: Number(params.get("_page")),
      pageSize: Number(params.get("_limit")),
      total: count,
    },
    sortField: params.get("sort"),
    sortOrder: params.get("order"),
  };
  return queryParams;
};
