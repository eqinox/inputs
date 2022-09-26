import { createSlice } from "@reduxjs/toolkit";

const initialConfigState = {
    message: null // 'text' and 'type'
}

const configSlice = createSlice({
    name: 'config',
    initialState: initialConfigState,
    reducers: {
        showMessage(state, action) {
            state.message = action.payload;
        },
        hideMessage(state) {
            state.message = null;
        }
    }
});

export const configActions = configSlice.actions;

export default configSlice;