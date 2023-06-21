import React from 'react';
import { screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import { renderWithProvider, providerWrapper } from './test-utils';

describe('App component tests', () => {
    it('App Matches Snapshot', () => {
        const domTree = renderer.create(
            providerWrapper(<App />),
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('logo renders', () => {
        renderWithProvider(<App />);
        const logo = screen.getByText(/TODO/i);
        expect(logo).toBeInTheDocument();
    });

    it('header renders', () => {
        const { container } = renderWithProvider(<App />);
        const header = container.getElementsByClassName('header');
        expect(header.length).toBe(1);
    });

    it('main renders', () => {
        const { container } = renderWithProvider(<App />);
        const header = container.getElementsByClassName('main');
        expect(header.length).toBe(1);
    });
});
