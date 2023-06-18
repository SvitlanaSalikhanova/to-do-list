import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Header from './Header';

describe('DeleteButton component tests', () => {
    it('Matches Snapshot', () => {
        const domTree = renderer.create(
            <Provider store={store}>
                <Header />
            </Provider>,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });

    it('header renders', () => {
        const { container } = render(
            <Provider store={store}>
                <Header />
            </Provider>,
        );
        const headers = container.getElementsByClassName('header');
        expect(headers.length).toBe(1);
    });
});
