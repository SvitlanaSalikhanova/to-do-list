/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTask } from '../redux/TasksSlice';
import CheckCss from '../styles/Check.module.scss';

export default function Check({ item }) {
    const dispatch = useDispatch();
    return (
        <div className={CheckCss.container}>
            <div className={CheckCss.round}>
                <input
                    type="checkbox"
                    checked={item.isDone}
                    onChange={() => dispatch(completeTask(item.id))}
                    id={`checkbox${item.id}`}
                />
                <label htmlFor={`checkbox${item.id}`} />
            </div>
        </div>
    );
}
