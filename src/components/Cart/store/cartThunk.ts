import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCart } from "../function";

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async () => {
    const [err, data] = await getCart();
    if (!err && data) return data;
  },
);
