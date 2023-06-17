import { configureStore } from '@reduxjs/toolkit';
import { writeToLocalStorage } from '../repository/repository';
import tasksReducer from './TasksSlice';
import filterReducer from './FilterSlice';

const saveTasksMiddleware = (store) => (next) => (action) => {
    console.log(store.getState().tasks);
    writeToLocalStorage(store.getState().tasks.tasks);

    return next(action);
};

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filter: filterReducer,
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveTasksMiddleware),
});

export default store;
