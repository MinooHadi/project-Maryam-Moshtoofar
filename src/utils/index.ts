
import { Params } from "../types";
import { v4 as uuidv4 } from 'uuid';

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


export const GenerateImageURLs = (images:string[])=>images.map((image)=> {
  return {
    uid: uuidv4(),
    name: image,
    url: `http://localhost:3002/files/${image}`
  }
})
 
