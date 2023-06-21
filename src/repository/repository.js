export const readLocalStorage = () => JSON.parse(localStorage.getItem('tasks'));

export const writeToLocalStorage = (tasks) => localStorage.setItem('tasks', JSON.stringify(tasks));
