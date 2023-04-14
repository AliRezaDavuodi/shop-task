import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = {
  info: {
    id: null,
    image: null,
    title: null,
    description: null,
  },
  status: {
    err: false,
    pending: false,
    success: false,
  },
};

const foodDetail = createSlice({
  name: "info",
  initialState: INITIAL__STATE,
  reducers: {
    replaceCartInfo(state, action) {
      const { id, description, title, image } = action.payload;
      state.info.description = description;
      state.info.id = id;
      state.info.image = image;
      state.info.title = title;
    },
    changeStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const ProductInfoActions = foodDetail.actions;

export default foodDetail.reducer;
