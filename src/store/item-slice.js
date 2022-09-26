import { createSlice } from "@reduxjs/toolkit";

const initialItemState = {
    all: [],
    formValid: false
};

const itemSlice = createSlice({
    name: "items",
    initialState: initialItemState,
    reducers: {
        setItems(state, action) {
            state.all.push(action.payload);
        },
        setFormValid(state, action) {
            state.formValid = action.payload;
        }
    },
});

export const itemActions = itemSlice.actions;

export default itemSlice;
