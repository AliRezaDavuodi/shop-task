import { createSlice } from "@reduxjs/toolkit";
import { productsType } from "../@types/service/products";
import { storeCart } from "../utils/storeCart";

const INITIAL__STATE = {
  basket: [] as productsType[],
};

const cart = createSlice({
  name: "cart",
  initialState: INITIAL__STATE,
  reducers: {
    addItemToCart(state, action) {
      const existsItem = state.basket.find(
        (food) => food.id === action.payload.id
      );

      if (!existsItem) {
        // if food is new, push it to the basket
        state.basket.push({ ...action.payload, amount: 1 });
        storeCart(state.basket);
        return;
      }
      // increase its amount by one
      existsItem.amount && existsItem.amount++;
      storeCart(state.basket);
    },
    decreaseItem(state, action) {
      // find item
      const item = state.basket.find((food) => food.id === action.payload.id);

      if (!item) return;

      // check its amount
      // if it's grater than one decrease it by one
      if (item.amount && item.amount > 1) {
        item.amount--;
        storeCart(state.basket);
        return;
      }
      // if it's one delete it from cart
      state.basket = state.basket.filter(
        (food) => food.id !== action.payload.id
      );

      storeCart(state.basket);
    },
    replaceCartBasket(state, action) {
      if (!action.payload) return;
      state.basket = [...action.payload];
    },
  },
});

export const cartActions = cart.actions;

export default cart.reducer;
