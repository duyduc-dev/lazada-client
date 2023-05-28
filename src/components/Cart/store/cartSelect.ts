import { RootState } from "~/src/store";

export const selectCarts = (state: RootState) => state.cart.carts;
