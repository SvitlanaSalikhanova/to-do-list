import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Check from './Check';

describe('Check Snapshot testing suite', () => {
    it('Matches Snapshot', () => {
        const item = {
            id: 1,
            text: 'text',
            isDone: false,
        };
        const domTree = renderer.create(
            <Provider store={store}><Check item={item} /></Provider>,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });
});
