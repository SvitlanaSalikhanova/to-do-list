import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import MainCss from './Main.module.scss';
import MenuLine from '../menuLine/MenuLine';
import TaskInput from '../taskInput/TaskInput';

export default function Main(
    {
        tempText, changeText, addItem, taskLines, changeFilter, clearCompleted,
    },
) {
    return (
        <div className={MainCss.main}>
            <div className={MainCss.logo}>TODO</div>
            <TaskInput tempText={tempText} changeText={changeText} addItem={addItem} />
            <div className={MainCss.linesWrapper}>
                <Droppable droppableId="list">
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {taskLines}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>

                <MenuLine
                    count={taskLines.length}
                    changeFilter={changeFilter}
                    deleteCompleted={clearCompleted}
                />
            </div>
        </div>
    );
}
