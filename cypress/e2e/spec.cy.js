// import cy from 'cypress';

describe('Todo tests', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/to-do-list');
    });

    describe('New task input tests', () => {
        it('input type', () => {
            cy.get('input')
                .type('first task')
                .should('have.value', 'first task');
        });

        it('submit input test', () => {
            cy.get('input')
                .type('first task')
                .type('{enter}')
                .should('have.value', '');
            cy.contains('first task');
            cy.window().then(
                (window) => JSON.parse(window.localStorage.getItem('tasks')),
            ).should('have.length', 1);
        });
    });

    describe('Count tests', () => {
        it('count for no items test', () => {
            cy.contains('0 items');
        });

        it('count for single item test', () => {
            const task = { id: 1, text: 'text 1', isDone: false };
            cy.then(() => {
                window.localStorage.setItem('tasks', JSON.stringify([task]));
            });
            cy.reload();
            cy.contains('1 item');
        });

        it('count for plural items test', () => {
            const task1 = { id: 1, text: 'text 1', isDone: false };
            const task2 = { id: 2, text: 'text 2', isDone: true };
            cy.then(() => {
                window.localStorage.setItem('tasks', JSON.stringify([task1, task2]));
            });
            cy.reload();
            cy.contains('2 items');
        });
    });

    describe('Checkbox tests', () => {
        it('check unchecked item test', () => {
            const task = { id: 1, text: 'text 1', isDone: false };
            cy.then(() => {
                window.localStorage.setItem('tasks', JSON.stringify([task]));
            });
            cy.reload();
            cy.get('[class^=Check_container]').click();
            cy.contains('text 1')
                .should('have.css', 'text-decoration')
                .should('include', 'line-through');
        });

        it('check checked item test', () => {
            const task = { id: 1, text: 'text 1', isDone: true };
            cy.then(() => {
                window.localStorage.setItem('tasks', JSON.stringify([task]));
            });
            cy.reload();
            cy.get('[class^=Check_container]').click();
            cy.contains('text 1')
                .should('have.css', 'text-decoration')
                .should('include', 'none');
        });
    });

    describe('Delete button tests', () => {
        it('delete button is not visible', () => {
            const task = { id: 1, text: 'text 1', isDone: false };
            cy.then(() => {
                window.localStorage.setItem('tasks', JSON.stringify([task]));
            });
            cy.reload();
            cy.get('[class^=DeleteButton_deleteButton]')
                .should('not.be.visible');
        });

        it('delete button click deletes item', () => {
            const task = { id: 1, text: 'text 1', isDone: false };
            cy.then(() => {
                window.localStorage.setItem('tasks', JSON.stringify([task]));
            });
            cy.reload();
            cy.get('[class^=DeleteButton_deleteButton]')
                .click({ force: true });
            cy.get('text 1').should('not.exist');
            cy.window().then(
                (window) => JSON.parse(window.localStorage.getItem('tasks')),
            ).should('have.length', 0);
        });
    });

    describe('Filter buttons tests', () => {
        it('filter button Active click shows active', () => {
            const task1 = { id: 1, text: 'text 1', isDone: false };
            const task2 = { id: 2, text: 'text 2', isDone: true };
            cy.then(() => {
                window.localStorage.setItem('tasks', JSON.stringify([task1, task2]));
            });
            cy.reload();
            cy.contains('Active').click();
            cy.contains('text 2').should('not.exist');
            cy.contains('text 1');
            cy.window().then(
                (window) => JSON.parse(window.localStorage.getItem('tasks')),
            ).should('have.length', 2);
        });

        it('filter button Completed click shows completed', () => {
            const task1 = { id: 1, text: 'text 1', isDone: false };
            const task2 = { id: 2, text: 'text 2', isDone: true };
            cy.then(() => {
                window.localStorage.setItem('tasks', JSON.stringify([task1, task2]));
            });
            cy.reload();
            cy.contains('Completed').click();
            cy.contains('text 1').should('not.exist');
            cy.contains('text 2');
            cy.window().then(
                (window) => JSON.parse(window.localStorage.getItem('tasks')),
            ).should('have.length', 2);
        });

        it('filter button All click shows all items', () => {
            const task1 = { id: 1, text: 'text 1', isDone: false };
            const task2 = { id: 2, text: 'text 2', isDone: true };
            cy.then(() => {
                window.localStorage.setItem('tasks', JSON.stringify([task1, task2]));
            });
            cy.reload();
            cy.contains('Completed').click();
            cy.contains('text 1').should('not.exist');
            cy.contains('text 2');
            cy.contains('All').click();
            cy.contains('text 1');
            cy.contains('text 2');
        });
    });

    describe('Clear completed button tests', () => {
        it('ClearCompleted deletes completed items', () => {
            const task1 = { id: 1, text: 'text 1', isDone: false };
            const task2 = { id: 2, text: 'text 2', isDone: true };
            const task3 = { id: 3, text: 'text 3', isDone: true };
            cy.then(() => {
                window.localStorage.setItem('tasks', JSON.stringify([task1, task2, task3]));
            });
            cy.reload();
            cy.contains('Clear Completed').click();
            cy.contains('text 2').should('not.exist');
            cy.contains('text 3').should('not.exist');
            cy.contains('text 1');
            cy.window().then(
                (window) => JSON.parse(window.localStorage.getItem('tasks')),
            ).should('have.length', 1);
        });

        it('ClearCompleted with unCompleted items', () => {
            const task1 = { id: 1, text: 'text 1', isDone: false };
            const task2 = { id: 2, text: 'text 2', isDone: false };
            cy.then(() => {
                window.localStorage.setItem('tasks', JSON.stringify([task1, task2]));
            });
            cy.reload();
            cy.contains('Clear Completed').click();
            cy.contains('text 1');
            cy.contains('text 2');

            cy.window().then(
                (window) => JSON.parse(window.localStorage.getItem('tasks')),
            ).should('have.length', 2);
        });
    });
});
