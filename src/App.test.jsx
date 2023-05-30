import React from 'react';
import { render as testingRender, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import MenuLine from './components/MenuLine';
import Check from './components/Check';

function render(component) {
    return testingRender(
        <Provider store={store}>
            {component}
        </Provider>,
    );
}

test('renders Todo text', () => {
    render(<App />);
    const linkElement = screen.getByText(/TODO/i);
    expect(linkElement).toBeInTheDocument();
});

const testItemDone = {
    id: 1,
    text: 'Test item 1',
    isDone: true,
};
const testItemNotDone = {
    id: 2,
    text: 'Test item 2',
    isDone: false,
};

describe('Check icon test', () => {
    it.each([[testItemDone, 'BsCheckCircle'], [testItemNotDone, 'BsCircle']])('renders correct check icon', (item, ckeckClassName) => {
        const { container } = render(<Check item={item} />);
        const checkIcons = container.getElementsByClassName(ckeckClassName);
        expect(checkIcons.length).toBe(1);
    });
});

test('renders check marked if task is done', () => {
    const { container } = render(<Check item={testItemDone} />);
    const checkIcon = container.getElementsByClassName('BsCheckCircle');
    expect(checkIcon.length).toBe(1);
});

test('renders menuLine with count', () => {
    render(<MenuLine count={2} />);
    const countElement = screen.getByText(/2 items/i);
    expect(countElement).toBeInTheDocument();
});

describe('MenuLine filters', () => {
    it.each(['All', 'Active', 'Completed'])('renders menuLine with filter buttons', (text) => {
        render(<MenuLine count={2} />);
        const filterElement = screen.getByText(text);
        expect(filterElement).toBeInTheDocument();
    });
});
