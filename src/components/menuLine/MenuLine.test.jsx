import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import MenuLine from './MenuLine';

const changeFilterMock = jest.fn();
const deleteCompletedMock = jest.fn();

describe('MenuLine component tests', () => {
    it('MenuLine Matches Snapshot', () => {
        const domTree = renderer.create(
            <MenuLine
                count={1}
                changeFilter={changeFilterMock}
                deleteCompleted={deleteCompletedMock}
            />,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    describe('Filter change test', () => {
        it.each(['All', 'Active', 'Completed'])('filter buttons click calls changeFilterMock', (buttonName) => {
            render(

                <MenuLine
                    count={1}
                    changeFilter={changeFilterMock}
                    deleteCompleted={deleteCompletedMock}
                />,
            );
            const button = screen.getByText(buttonName);
            fireEvent.click(button);
            expect(changeFilterMock).toBeCalledTimes(1);
        });
    });

    it('when clearAll clicked calls deleteCompleted', () => {
        render(
            <MenuLine
                count={1}
                changeFilter={changeFilterMock}
                deleteCompleted={deleteCompletedMock}
            />,
        );
        const button = screen.getByText(/Clear Completed/i);
        fireEvent.click(button);
        expect(deleteCompletedMock).toBeCalledTimes(1);
    });

    it('renders count correctly for 1', () => {
        render(
            <MenuLine
                count={1}
                changeFilter={changeFilterMock}
                deleteCompleted={deleteCompletedMock}
            />,
        );
        const button = screen.getByText(/1 item/i);
        expect(button).toBeInTheDocument();
    });

    it('renders count correctly for plural', () => {
        render(
            <MenuLine
                count={2}
                changeFilter={changeFilterMock}
                deleteCompleted={deleteCompletedMock}
                filter="SHOW_ALL"
            />,
        );
        const count = screen.getByText(/2 items/i);
        expect(count).toBeInTheDocument();
    });

    describe('Filter class change test', () => {
        it.each([['All', 'SHOW_ALL'],
            ['Active', 'SHOW_ACTIVE'], ['Completed', 'SHOW_COMPLETED']])(
            'filter buttons click calls changeFilterMock',
            (buttonName, filter) => {
                render(
                    <MenuLine
                        count={2}
                        changeFilter={changeFilterMock}
                        deleteCompleted={deleteCompletedMock}
                        filter={filter}
                    />,
                );
                const button = screen.getByText(buttonName);
                expect(button).toHaveClass('filterStateActive');
            },
        );
    });
});
