import React from 'react';
import { useDispatch } from 'react-redux';
import { BsCheckCircle, BsCircle } from 'react-icons/bs';
import { completeTask } from '../redux/TasksSlice';
import CheckCss from '../styles/Check.module.scss';

export default function Check({ item }) {
    const dispatch = useDispatch();
    return (
        <button
            type="button"
            className={CheckCss.doneCheck}
            onClick={() => dispatch(completeTask(item.id))}
        >
            {item.isDone ? <BsCheckCircle className="BsCheckCircle" /> : <BsCircle className="BsCircle" />}
        </button>
    );
}
