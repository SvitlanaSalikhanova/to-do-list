import React from 'react';
import Check from './Check';
import DeleteButton from './DeleteButton';
import TaskLineCss from '../styles/TaskLine.module.scss';

export default function TaskLine({ item, style }) {
    return (
        <div
            className={TaskLineCss.taskLine}
            style={style}
        >
            <Check item={item} />

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
                <DeleteButton item={item} />
            </div>
        </div>
    );
}
