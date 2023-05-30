import React from 'react';
import { BsXLg } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/TasksSlice';
import DeleteButtonCss from '../styles/DeleteButton.module.scss';

export default function DeleteButton({ item }) {
    const dispatch = useDispatch();
    return (
        <button
            type="button"
            className={DeleteButtonCss.deleteButton}
            onClick={() => dispatch(deleteTask(item.id))}
        >
            <BsXLg />
        </button>
    );
}
