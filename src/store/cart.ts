// import { createSlice } from "@reduxjs/toolkit";
// import { notif } from "utilities/toast";

// const INITIAL__STATE = {
//   basket: [],
// };

// const cart = createSlice({
//   name: "cart",
//   initialState: INITIAL__STATE,
//   reducers: {
//     addItemToCart(state, action) {
//       const exsitsItem = state.basket.find(
//         (food) => food.id === action.payload.id
//       );

//       if (!exsitsItem) {
//         // if food is new, push it to the basket
//         state.basket.push({ ...action.payload, amount: 1 });

//         return;
//       }
//       // increase its amount by one
//       exsitsItem.amount++;
//     },
//     deleteItemFromCart(state, action) {
//       // filter the basket array
//       state.basket = state.basket.filter(
//         (food) => food.id !== action.payload.id
//       );
//     },
//     increaseItem(state, action) {
//       // find the item
//       const item = state.basket.find((food) => food.id === action.payload.id);
//       // increase its amount by one
//       item.amount++;
//     },
//     decreaseItem(state, action) {
//       // find item
//       const item = state.basket.find((food) => food.id === action.payload.id);
//       // chcek its amount
//       // if it's grather than one decrease it by one
//       if (item.amount > 1) {
//         item.amount--;

//         return;
//       }
//       // if it's one delete it from cart
//       state.basket = state.basket.filter(
//         (food) => food.id !== action.payload.id
//       );
//     },

//     replaceCartbasket(state, action) {
//       state.basket = [...action.payload];
//     },
//   },
// });

// export const cartActions = cart.actions;

// export default cart.reducer;

export const a = {};
