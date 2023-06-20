import React from 'react';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import tasksReducer from './redux/TasksSlice';
import filterReducer from './redux/FilterSlice';

const preloadedState = {};

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filter: filterReducer,
    },
    preloadedState,
});

function providerWrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
}

function renderWithProvider(
    ui,
    {
        ProviderStore = store,
        ...renderOptions
    } = {},
) {
    return { ProviderStore, ...render(ui, { wrapper: providerWrapper, ...renderOptions }) };
}

export { renderWithProvider, providerWrapper };
