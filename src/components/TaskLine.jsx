import React from 'react';
import { useDispatch } from 'react-redux';
import Check from './Check';
import DeleteButton from './DeleteButton';
import TaskLineCss from '../styles/TaskLine.module.scss';
import { completeTask, deleteTask } from '../redux/TasksSlice';

export default function TaskLine({ item, style }) {
    const dispatch = useDispatch();
    const onCheckChange = () => dispatch(completeTask(item.id));
    const onDelete = () => dispatch(deleteTask(item.id));
    return (
        <div
            className={TaskLineCss.taskLine}
            style={style}
        >
            <Check item={item} onChange={onCheckChange} />

            <div
                className={
                    item.isDone
                        ? TaskLineCss.completedTaskText
                        : TaskLineCss.uncompletedTaskText
                }
            >
                {item.text}
            </div>
            <div className={TaskLineCss.deleteBlock}>
                <DeleteButton onClick={onDelete} />
            </div>
        </div>
    );
}
