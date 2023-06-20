import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import tasksReducer from './redux/TasksSlice';
import filterReducer from './redux/FilterSlice';

function renderWithProvider(
    ui,
    {
        preloadedState = {},
        store = configureStore({
            reducer: {
                tasks: tasksReducer,
                filter: filterReducer,
            },
            preloadedState,
        }),
        ...renderOptions
    } = {},
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>;
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

function providerWrapper({ children }, preloadedState = {}) {
    const store = configureStore({
        reducer: {
            tasks: tasksReducer,
            filter: filterReducer,
        },
        preloadedState,
    });
    return <Provider store={store}>{children}</Provider>;
}

export { providerWrapper, renderWithProvider };
