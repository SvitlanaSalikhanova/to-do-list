import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import DeleteButton from './DeleteButton';

const onClickMock = jest.fn();

describe('DeleteButton component tests', () => {
    it('Matches Snapshot', () => {
        const domTree = renderer.create(
            <DeleteButton onChange={onClickMock} />,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('when clicked calls onClick', () => {
        render(<DeleteButton onClick={onClickMock} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(onClickMock).toBeCalledTimes(1);
    });

    it('delete icon renders', () => {
        const { container } = render(
            <DeleteButton onClick={onClickMock} />,
        );
        const deleteIcons = container.getElementsByClassName('BsXLg');
        expect(deleteIcons.length).toBe(1);
    });
});
