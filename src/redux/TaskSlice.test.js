import reducer, {
    addTask,
    deleteTask,
    completeTask,
    clearCompleted,
    reorder,
} from './TasksSlice';

const item1 = {
    id: 1,
    text: 'text 1',
    isDone: false,
};
const item2 = {
    id: 2,
    text: 'text 2',
    isDone: true,
};

describe('task reducer', () => {
    it('adding a task', () => {
        const initialState = {
            tasks: [],
        };

        const newState = reducer(initialState, addTask(item1));

        expect(newState).toEqual({
            tasks: [
                {
                    id: 1,
                    text: 'text 1',
                    isDone: false,
                },
            ],
        });
    });

    it('deleting a task', () => {
        const initialState = {
            tasks: [item1, item2],
        };
        const newState = reducer(initialState, deleteTask(1));

        expect(newState).toEqual({
            tasks: [
                {
                    id: 2,
                    text: 'text 2',
                    isDone: true,
                },
            ],
        });
    });

    it('deleting if no such id, deletes nothing', () => {
        const initialState = {
            tasks: [item1],
        };
        const newState = reducer(initialState, deleteTask(2));

        expect(newState).toEqual({
            tasks: [
                {
                    id: 1,
                    text: 'text 1',
                    isDone: false,
                },
            ],
        });
    });

    it('complete a task', () => {
        const initialState = {
            tasks: [item1, item2],
        };
        const newState = reducer(initialState, completeTask(1));

        expect(newState).toEqual({
            tasks: [
                {
                    id: 1,
                    text: 'text 1',
                    isDone: true,
                },
                {
                    id: 2,
                    text: 'text 2',
                    isDone: true,
                },
            ],
        });
    });

    it('clearCompleted tasks if no completed changes nothing', () => {
        const initialState = {
            tasks: [item1, item1],
        };
        const newState = reducer(initialState, clearCompleted());

        expect(newState).toEqual({
            tasks: [
                {
                    id: 1,
                    text: 'text 1',
                    isDone: false,
                },
                {
                    id: 1,
                    text: 'text 1',
                    isDone: false,
                },
            ],
        });
    });

    it('clearCompleted tasks deletes completed', () => {
        const initialState = {
            tasks: [item1, item2],
        };
        const newState = reducer(initialState, clearCompleted());

        expect(newState).toEqual({
            tasks: [
                {
                    id: 1,
                    text: 'text 1',
                    isDone: false,
                },
            ],
        });
    });

    it('reorder tasks swaps items', () => {
        const initialState = {
            tasks: [item1, item2],
        };
        const newState = reducer(initialState, reorder({ startIndex: 1, endIndex: 0 }));

        expect(newState).toEqual({
            tasks: [
                {
                    id: 2,
                    text: 'text 2',
                    isDone: true,
                },
                {
                    id: 1,
                    text: 'text 1',
                    isDone: false,
                },
            ],
        });
    });
});
