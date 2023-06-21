import reducer, { setFilter } from './FilterSlice';
import { SHOW_ALL, SHOW_COMPLETED } from '../FilterConstatnts';

describe('filter reducer', () => {
    it('set filter test', () => {
        const initialState = {
            filter: SHOW_ALL,
        };

        const newState = reducer(initialState, setFilter(SHOW_COMPLETED));

        expect(newState).toEqual({
            filter: SHOW_COMPLETED,
        });
    });
});
