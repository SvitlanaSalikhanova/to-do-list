import React from 'react';
import renderer from 'react-test-renderer';
import { screen } from '@testing-library/react';
import TaskLine from './TaskLine';
import { renderWithProvider, providerWrapper } from '../../test-utils';

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
            providerWrapper(<TaskLine item={UncompletedItem} />),
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('TaskLine for Uncompleted task Matches Snapshot', () => {
        const domTree = renderer.create(
            providerWrapper(<TaskLine item={CompletedItem} />),
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('TaskLine checkbox for completed task is checked', () => {
        renderWithProvider(<TaskLine item={CompletedItem} />);
        const check = screen.getByRole('checkbox');
        expect(check).toBeInTheDocument();
        expect(check.checked).toBe(true);
    });

    it('TaskLine checkbox for uncompleted task is unchecked', () => {
        renderWithProvider(<TaskLine item={UncompletedItem} />);
        const check = screen.getByRole('checkbox');
        expect(check).toBeInTheDocument();
        expect(check.checked).toBe(false);
    });

    it('TaskLine description renders', () => {
        renderWithProvider(<TaskLine item={UncompletedItem} />);
        const description = screen.getByText('text');
        expect(description).toBeInTheDocument();
    });

    it('TaskLine deleteButton renders', () => {
        renderWithProvider(<TaskLine item={CompletedItem} />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
});
