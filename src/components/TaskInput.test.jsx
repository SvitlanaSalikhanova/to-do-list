import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import TaskInput from './TaskInput';

const tempText = 'text';

const onChangeMock = jest.fn();
const onAddItemMock = jest.fn();

describe('TaskInput component tests', () => {
    it('TaskInput Matches Snapshot', () => {
        const domTree = renderer.create(
            <Provider store={store}>
                <TaskInput tempText={tempText} changeText={onChangeMock} addItem={onAddItemMock} />
            </Provider>,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    // it('when changes calls onChange', () => {
    //     render(
    //         <Provider store={store}>
    //             <TaskInput tempText={tempText} changeText={onChangeMock} addItem={onAddItemMock} />
    //         </Provider>,
    //     );
    //     const input = screen.getByRole('textbox');
    //     fireEvent.change(input);
    //     expect(onChangeMock).toBeCalledTimes(1);
    // });

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
