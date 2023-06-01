import React from 'react';
import TaskInputCss from '../styles/TaskInput.module.scss';

export default function TaskInput({ tempText, changeText, addItem }) {
    return (
        <input
            type="text"
            placeholder="Enter your task and press ENTER"
            className={TaskInputCss.inputTask}
            value={tempText}
            onChange={changeText}
            onKeyUp={addItem}
        />
    );
}
