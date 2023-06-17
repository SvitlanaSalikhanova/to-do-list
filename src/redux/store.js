import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './TasksSlice';
import filterReducer from './FilterSlice';

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filter: filterReducer,
    },
});

export default store;
