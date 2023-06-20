import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import {
    getActive,
    addTask,
    reorder,
    clearCompleted,
} from '../redux/TasksSlice';
import draggableWrap from '../DraggableWrapper';
import Main from '../components/main/Main';
import { setFilter } from '../redux/FilterSlice';

export default function MainController() {
    const tasks = useSelector(getActive);

    const filter = useSelector((state) => state.filter.filter);

    const dispatch = useDispatch();

    const [tempText, setTempText] = React.useState('');

    const changeFilter = (filterValue) => dispatch(setFilter(filterValue));

    const deleteCompleted = () => dispatch(clearCompleted());

    function addItem(event) {
        if (event.key === 'Enter' && event.target.value) {
            const newItem = {
                id: new Date().valueOf(),
                text: tempText,
                isDone: false,
            };
            dispatch(addTask(newItem));

            setTempText('');
        }
    }

    function changeText(event) {
        setTempText(event.target.value);
    }

    const taskLines = tasks.map((elem, index) => (
        draggableWrap(filter, elem, index)
    ));

    function onDragEnd(result) {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }
        dispatch(reorder({ startIndex: result.source.index, endIndex: result.destination.index }));
    }
    const component = (
        <DragDropContext onDragEnd={onDragEnd}>
            <Main
                changeText={changeText}
                addItem={addItem}
                tempText={tempText}
                taskLines={taskLines}
                changeFilter={changeFilter}
                clearCompleted={deleteCompleted}
            />
        </DragDropContext>
    );
    return (
        component
    );
}
