import { createSlice } from '@reduxjs/toolkit';

import { SHOW_ALL } from '../FilterConstatnts';

const initialState = {
    filter: SHOW_ALL,
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
