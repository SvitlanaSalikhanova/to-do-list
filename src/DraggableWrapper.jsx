import React from 'react';
import { Draggable, DragDropContext } from 'react-beautiful-dnd';
import TaskLine from './components/taskLine/TaskLine';
import { SHOW_ALL } from './FilterConstatnts';

function draggableWrap(filter, elem, index) {
    return (
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
    );
}

function dragAndDropContextWrap({ children }, onDragEnd) {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {children}
        </DragDropContext>
    );
}

export { dragAndDropContextWrap, draggableWrap };
