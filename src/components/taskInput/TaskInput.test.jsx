import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskInput from './TaskInput';

const tempText = 'text';

const onChangeMock = jest.fn();
const onAddItemMock = jest.fn();

describe('TaskInput component tests', () => {
    it('TaskInput Matches Snapshot', () => {
        const domTree = renderer.create(
            <TaskInput tempText={tempText} changeText={onChangeMock} addItem={onAddItemMock} />,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('when changes calls onChange', () => {
        render(
            <TaskInput tempText={tempText} changeText={onChangeMock} addItem={onAddItemMock} />,
        );
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(onChangeMock).toBeCalledTimes(1);
    });

    it('when changes calls onChange', () => {
        render(
            <TaskInput tempText={tempText} changeText={onChangeMock} addItem={onAddItemMock} />,
        );
        const input = screen.getByRole('textbox');
        fireEvent.keyUp(input);
        expect(onAddItemMock).toBeCalledTimes(1);
    });

    // it('on keyup calls onAddItem', () => {
    //     render(
    //         <Provider store={store}>
    //             <TaskInput tempText={tempText} onChange={onChangeMock} onKeyUp={onAddItemMock} />
    //         </Provider>,
    //     );
    //     const input = screen.getByRole('textbox');
    //     fireEvent.keyUp(input);
    //     expect(onAddItemMock).toBeCalledTimes(1);
    // });
});
