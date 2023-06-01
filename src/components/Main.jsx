import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import MainCss from '../styles/Main.module.scss';
import MenuLine from './MenuLine';
import TaskInput from './TaskInput';

export default function Main(
    {
        tempText, changeText, addItem, taskLines,
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

                <MenuLine count={taskLines.length} />
            </div>
        </div>
    );
}
