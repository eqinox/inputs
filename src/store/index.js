import { configureStore } from "@reduxjs/toolkit";
import configSlice from "./config-slice";

import itemSlice from "./item-slice";

const store = configureStore({
    reducer: {
        items: itemSlice.reducer,
        config: configSlice.reducer
    },
});

export default store;
