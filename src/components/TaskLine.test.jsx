import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import TaskLine from './TaskLine';

const UncompletedItem = {
    id: 1,
    text: 'text',
    isDone: false,
};

const CompletedItem = {
    id: 1,
    text: 'text',
    isDone: true,
};

describe('TaskLine component tests', () => {
    it('TaskLine for Completed task Matches Snapshot', () => {
        const domTree = renderer.create(
            <Provider store={store}>
                <TaskLine item={UncompletedItem} />
            </Provider>,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('TaskLine for Uncompleted task Matches Snapshot', () => {
        const domTree = renderer.create(
            <Provider store={store}>
                <TaskLine item={CompletedItem} />
            </Provider>,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('TaskLine checkbox for completed task is checked', () => {
        render(<Provider store={store}><TaskLine item={CompletedItem} /></Provider>);
        const check = screen.getByRole('checkbox');
        expect(check).toBeInTheDocument();
        expect(check.checked).toBe(true);
    });

    it('TaskLine checkbox for uncompleted task is unchecked', () => {
        render(<Provider store={store}><TaskLine item={UncompletedItem} /></Provider>);
        const check = screen.getByRole('checkbox');
        expect(check).toBeInTheDocument();
        expect(check.checked).toBe(false);
    });

    it('TaskLine description renders', () => {
        render(<Provider store={store}><TaskLine item={UncompletedItem} /></Provider>);
        const description = screen.getByText('text');
        expect(description).toBeInTheDocument();
    });

    it('TaskLine deleteButton renders', () => {
        render(<Provider store={store}><TaskLine item={UncompletedItem} /></Provider>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
});
