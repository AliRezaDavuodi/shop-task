import { createSlice } from "@reduxjs/toolkit";
import { productsType } from "../@types/service/products";

const INITIAL__STATE = {
  products: [] as productsType[],
  filterProducts: [] as productsType[],
};

const Products = createSlice({
  name: "products",
  initialState: INITIAL__STATE,
  reducers: {
    replaceCartInfo(state, action) {
      const { products } = action.payload;
      state.products = products;
      state.filterProducts = products;
    },

    setFilterProduct(state, action) {
      state.filterProducts = action.payload;
    },
  },
});

export const ProductsActions = Products.actions;

export default Products.reducer;
