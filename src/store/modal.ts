import { createSlice } from "@reduxjs/toolkit";

const INITIAL__STATE = {
  show: false,
};

const Modal = createSlice({
  name: "modal",
  initialState: INITIAL__STATE,
  reducers: {
    showModal(state) {
      state.show = true;
    },
    hideModal(state) {
      state.show = false;
    },
  },
});

export const ModalActions = Modal.actions;

export default Modal.reducer;
