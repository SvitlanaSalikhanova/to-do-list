import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MenuLine from './MenuLine';

const onChangeMock = jest.fn();

describe('MenuLine component tests', () => {
    it('MenuLine Matches Snapshot', () => {
        const domTree = renderer.create(
            <Provider store={store}>
                <MenuLine count={1} onChange={onChangeMock} />
            </Provider>,
        ).toJSON();
        expect(domTree).toMatchSnapshot();
    });
});
