import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  PagedProductsRequest,
  createProductRequest,
  singleProductRequest,
  updateProductRequest,
  deleteProductRequest,
} from "../../../../api/products";
import { asyncThunkConfig, Product, ProductsState } from "../../../../types";

const initialState = {
  products: [],
  product: {},
  productsCount: 0,
  loading: false,
  error: "",
  queryParams: {
    pagination: {
      current: 1,
      pageSize: 2,
    },
    sortField: undefined,
    sortOrder: undefined,
  },
} as ProductsState;

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  PagedProductsRequest
);

export const createProduct = createAsyncThunk(
  "products/createProduct",
  (newProduct: Product) => createProductRequest(newProduct)
);

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  (id: string) => singleProductRequest(id)
);

export const updateProduct = createAsyncThunk(
  "products/updateProduct",
  ({ id, editedProduct }: asyncThunkConfig) =>
    updateProductRequest(id, editedProduct)
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  (id: number) => deleteProductRequest(id)
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
      return { ...state, loading: true };
    });
    builder.addCase(createProduct.fulfilled, (state, action) => {
      const { count } = action.payload;
      return { ...state, loading: false, productsCount: count };
    });
    builder.addCase(createProduct.rejected, (state, action) => {
      return { ...state, loading: false, error: String(action.payload) };
    });

    // read single product
    builder.addCase(fetchSingleProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      return { ...state, loading: false, product: action.payload };
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      return { ...state, loading: false, error: String(action.payload) };
    });

    // update product
    builder.addCase(updateProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(updateProduct.fulfilled, (state, _) => {
      return { ...state, loading: false };
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      return { ...state, loading: false, error: String(action.payload) };
    });

    // delete product
    builder.addCase(deleteProduct.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      return { ...state, loading: false };
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      return { ...state, loading: false, error: String(action.payload) };
    });
  },
});
export default productsSlice.reducer;
