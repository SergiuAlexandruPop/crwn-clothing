import SHOP_DATA from "./shop.data";

const INITILA_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITILA_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
