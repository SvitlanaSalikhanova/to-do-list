import React from 'react';
import { screen } from '@testing-library/react';
import { DragDropContext } from 'react-beautiful-dnd';
import Main from './Main';
import { renderWithProvider } from '../../test-utils';
import { draggableWrap } from '../../DraggableWrapper';

const changeTextMock = jest.fn();
const addItemMock = jest.fn();
const changeFilterMock = jest.fn();
const clearCompletedMock = jest.fn();
const UncompletedItem = {
    id: 1,
    text: 'text1',
    isDone: false,
};

const CompletedItem = {
    id: 2,
    text: 'text2',
    isDone: true,
};
const taskLine1 = draggableWrap('SHOW_ALL', UncompletedItem, 0);
const taskLine2 = draggableWrap('SHOW_ALL', CompletedItem, 1);

describe('Main component tests', () => {
    it('Main has a checkbox', () => {
        renderWithProvider(
            <DragDropContext onDragEnd={jest.fn()}>
                <Main
                    tempText="text"
                    changeText={changeTextMock}
                    addItem={addItemMock}
                    taskLines={[taskLine1, taskLine2]}
                    changeFilter={changeFilterMock}
                    clearCompleted={clearCompletedMock}
                />
            </DragDropContext>,
        );
        const checks = screen.getAllByRole('checkbox');
        expect(checks.length).toBe(2);
        expect(checks[0].checked).toBe(false);
        expect(checks[1].checked).toBe(true);
    });

    it('Main has a TODO logo', () => {
        renderWithProvider(
            <DragDropContext onDragEnd={jest.fn()}>
                <Main
                    tempText="text"
                    changeText={changeTextMock}
                    addItem={addItemMock}
                    taskLines={[taskLine1, taskLine2]}
                    changeFilter={changeFilterMock}
                    clearCompleted={clearCompletedMock}
                />
            </DragDropContext>,
        );
        const name = screen.getByText(/TODO/);
        expect(name).toBeInTheDocument();
    });

    it('Main has task descriptions', () => {
        renderWithProvider(
            <DragDropContext onDragEnd={jest.fn()}>
                <Main
                    tempText="text"
                    changeText={changeTextMock}
                    addItem={addItemMock}
                    taskLines={[taskLine1, taskLine2]}
                    changeFilter={changeFilterMock}
                    clearCompleted={clearCompletedMock}
                />
            </DragDropContext>,
        );
        const description1 = screen.getByText(/text1/i);
        const description2 = screen.getByText(/text2/i);
        expect(description1).toBeInTheDocument();
        expect(description2).toBeInTheDocument();
    });

    it('Main has a Menu line', () => {
        const taskLine3 = draggableWrap('SHOW_ACTIVE', UncompletedItem, 0);
        renderWithProvider(
            <DragDropContext onDragEnd={jest.fn()}>
                <Main
                    tempText="text"
                    changeText={changeTextMock}
                    addItem={addItemMock}
                    taskLines={[taskLine3]}
                    changeFilter={changeFilterMock}
                    clearCompleted={clearCompletedMock}
                />
            </DragDropContext>,
        );
        const count = screen.getByText(/1 item/);
        const filterAll = screen.getByText(/All/);
        const filterActive = screen.getByText(/Active/);
        expect(count).toBeInTheDocument();
        expect(filterAll).toBeInTheDocument();
        expect(filterActive).toBeInTheDocument();
    });
});
