import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { log } from "console";
import { fetchPagedProductsRequest,createProductRequest } from "../../../../api/products";
import { Product, ProductsState } from "../../../../types";
import products from "../../products";

const initialState = {
  products: [],
  productsCount: 0,
  loading: false,
  error: "",
  queryParams: {
    pagination: {
      current: 1,
      pageSize: 5,
    },
    sortField: undefined,
    sortOrder: undefined,
  },
} as ProductsState;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  fetchPagedProductsRequest
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  (newProduct:Product) => createProductRequest(newProduct)
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // read
    builder.addCase(fetchProducts.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      const { products, count, queryParams } = action.payload;
      return {
        ...state,
        loading: false,
        products: products,
        queryParams: {
          pagination: {
            current: queryParams.pagination?.current,
            pageSize: queryParams.pagination?.pageSize,
            total: count,
          },
          sortField: queryParams.sortField,
          sortOrder: queryParams.sortOrder,
        },
      };
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      return {
        ...state,
        products: [],
        loading: false,
        error: String(action.payload),
      };
    });
    // create
     builder.addCase(createProduct.pending, (state) => {

      return { ...state, loading: true};
    });
    builder.addCase(createProduct.fulfilled, (state,action) => {
      const {count} = action.payload
      console.log(count);
      return { ...state, loading: false , productsCount:count };
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      return { ...state, loading: false, error: String(action.payload) };
    });
  },
});
export default productsSlice.reducer;
