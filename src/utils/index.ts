
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

  return queryParams;
};
