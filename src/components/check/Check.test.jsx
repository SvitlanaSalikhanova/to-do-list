import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
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
            <Check item={UncompletedItem} onChange={onChangeMock} />,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('Checked Matches Snapshot', () => {
        const domTree = renderer.create(
            <Check item={CompletedItem} onChange={onChangeMock} />,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('when clicked calls onChange', () => {
        render(
            <Check item={UncompletedItem} onChange={onChangeMock} />,
        );
        const check = screen.getByRole('checkbox');
        fireEvent.click(check);
        expect(onChangeMock).toBeCalledTimes(1);
    });
});
