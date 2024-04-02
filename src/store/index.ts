import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./features/login.ts";
import accountSlice from './features/Account.ts'
import orderSlice from './features/orders.ts'

const store = configureStore({
    // 合并多个Slice
    reducer: {
      login: loginSlice,
      account:accountSlice,
      order:orderSlice,
    },
  });


  export default store;