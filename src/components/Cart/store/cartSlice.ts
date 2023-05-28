import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartModel } from "~/src/interfaces/cart";
import { fetchCart } from "./cartThunk";

interface CartState {
  amount: number;
  cartSelected: string[];
  carts: CartModel[];
}

const initialState: CartState = {
  amount: 0,
  cartSelected: [],
  carts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartSelected: (state, action: PayloadAction<string>) => {
      state.cartSelected.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.carts = action.payload;
    });
  },
});

const { reducer: cartReducer, actions: cartsActions } = cartSlice;

export { cartsActions };
export default cartReducer;
