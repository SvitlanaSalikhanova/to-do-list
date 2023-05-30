import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import MainCss from '../styles/Main.module.scss';
import MenuLine from './MenuLine';

export default function Main(
    {
        tempText, changeText, addItem, taskLines,
    },
) {
    return (
        <div className={MainCss.main}>
            <div className={MainCss.logo}>TODO</div>
            <input
                type="text"
                placeholder="Enter your task and press ENTER"
                className={MainCss.inputTask}
                value={tempText}
                onChange={changeText}
                onKeyUp={addItem}
            />
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
