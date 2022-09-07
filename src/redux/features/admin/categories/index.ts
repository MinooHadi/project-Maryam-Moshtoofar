import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllCategoriesRequest } from "../../../../api/products";
import { CategoriesState } from "../../../../types";

const initialState = {
  categories: [],
  loading: false,
  error: "",
} as CategoriesState;

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  fetchAllCategoriesRequest
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      return { ...state, loading: false, categories: action.payload };
    });
    builder.addCase(fetchCategories.rejected, (_state, action) => {
      return {
        categories: [],
        loading: false,
        error: String(action.payload),
      };
    });
  },
});
export default categoriesSlice.reducer;
