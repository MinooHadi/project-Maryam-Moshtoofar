import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAllCategoriesRequest } from "../../../api/products";
import { CategoriesState } from "../../../types";

const initialState = {
  categories: [],
  loading: "idle",
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
      return { ...state, loading: "pending" };
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      return { ...state, loading: "succeeded", categories: action.payload };
    });
    builder.addCase(fetchCategories.rejected, (_state, action) => {
      return {
        categories: [],
        loading: "failed",
        error: String(action.payload),
      };
    });
  },
});
export default categoriesSlice.reducer;
