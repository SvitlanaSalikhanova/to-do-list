import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DeleteButton from './DeleteButton';

const onClickMock = jest.fn();

describe('DeleteButton component tests', () => {
    it('Matches Snapshot', () => {
        const domTree = renderer.create(
            <Provider store={store}>
                <DeleteButton onChange={onClickMock} />
            </Provider>,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('when clicked calls onClick', () => {
        render(<Provider store={store}><DeleteButton onClick={onClickMock} /></Provider>);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(onClickMock).toBeCalledTimes(1);
    });

    it('delete icon renders', () => {
        const { container } = render(
            <Provider store={store}>
                <DeleteButton onClick={onClickMock} />
            </Provider>,
        );
        const deleteIcons = container.getElementsByClassName('BsXLg');
        expect(deleteIcons.length).toBe(1);
    });
});
