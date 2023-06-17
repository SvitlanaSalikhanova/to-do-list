import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import TaskLine from '../components/TaskLine';
import { getActive, addTask, reorder } from '../redux/TasksSlice';

import Main from '../components/Main';
import { SHOW_ALL } from '../FilterConstatnts';

export default function MainController() {
    const tasks = useSelector(getActive);

    const filter = useSelector((state) => state.filter.filter);

    const dispatch = useDispatch();

    const [tempText, setTempText] = React.useState('');

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
        <Draggable draggableId={`${elem.id}`} index={index} key={elem.id}>
            {(provided) => {
                const style = filter !== SHOW_ALL ? { cursor: 'not-allowed' } : { };
                const props = filter === SHOW_ALL && { ...provided.draggableProps };
                return (
                    <div
                        ref={provided.innerRef}
                        {...props}
                        {...provided.dragHandleProps}
                    >
                        <TaskLine
                            item={elem}
                            style={style}
                        />
                    </div>
                );
            }}
        </Draggable>

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

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Main
                changeText={changeText}
                addItem={addItem}
                tempText={tempText}
                taskLines={taskLines}
            />
        </DragDropContext>
    );
}
