import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Header from './Header';

describe('DeleteButton component tests', () => {
    it('Matches Snapshot', () => {
        const domTree = renderer.create(
            <Header />,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('header renders', () => {
        const { container } = render(
            <Header />,
        );
        const headers = container.getElementsByClassName('header');
        expect(headers.length).toBe(1);
    });
});
