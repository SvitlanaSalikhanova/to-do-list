import React from 'react';
import { screen } from '@testing-library/react';
import MainController from './MainController';
import { renderWithProvider } from '../test-utils';

describe('MainController component tests', () => {
    it('renders a TODO logo', () => {
        renderWithProvider(
            <MainController />,
        );
        const name = screen.getByText(/TODO/);
        expect(name).toBeInTheDocument();
    });

    it('renders a taskInput', () => {
        renderWithProvider(<MainController />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });
});
