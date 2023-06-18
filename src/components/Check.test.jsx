import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Check from './Check';

const UncompletedItem = {
    id: 1,
    text: 'text',
    isDone: false,
};
const CompletedItem = {
    id: 1,
    text: 'text',
    isDone: false,
};

const onChangeMock = jest.fn();

describe('Check component tests', () => {
    it('Unchecked Matches Snapshot', () => {
        const domTree = renderer.create(
            <Provider store={store}>
                <Check item={UncompletedItem} onChange={onChangeMock} />
            </Provider>,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('Checked Matches Snapshot', () => {
        const domTree = renderer.create(
            <Provider store={store}>
                <Check item={CompletedItem} onChange={onChangeMock} />
            </Provider>,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('when clicked calls onChange', () => {
        render(
            <Provider store={store}>
                <Check item={UncompletedItem} onChange={onChangeMock} />
            </Provider>,
        );
        const check = screen.getByRole('checkbox');
        fireEvent.click(check);
        expect(onChangeMock).toBeCalledTimes(1);
    });
});
