import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  allCategoriesRequest,
  singleCategoryRequest,
} from "../../../../api/category";
import { CategoriesState } from "../../../../types";

const initialState = {
  categories: [],
  category: { id: "", name: "", icon: "" },
  loading: false,
  error: "",
} as CategoriesState;

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  allCategoriesRequest
);

export const fetchCategory = createAsyncThunk(
  "categories/fetchCategory",
  singleCategoryRequest
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // read
    builder.addCase(fetchCategories.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      return { ...state, loading: false, categories: action.payload };
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      return {
        ...state,
        categories: [],
        loading: false,
        error: String(action.payload),
      };
    });

    // read single category

    builder.addCase(fetchCategory.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      return { ...state, loading: false, category: action.payload };
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: String(action.payload),
      };
    });
  },
});
export default categoriesSlice.reducer;
