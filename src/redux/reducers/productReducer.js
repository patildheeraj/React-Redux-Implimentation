import { ActionsTypes } from "../contants/action-type";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ActionsTypes.SET_PRODUCTS:
      return { ...state, products: actions.payload };

    default:
      return state;
  }
};

export const selectProductReducer = (state = {}, actions) => {
  switch (actions.type) {
    case ActionsTypes.SELECTED_PRODUCT:
      return { ...state, ...actions.payload };
    case ActionsTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
