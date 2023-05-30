import React from 'react';
import Check from './Check';
import DeleteButton from './DeleteButton';
import TaskLineCss from '../styles/TaskLine.module.scss';

export default function TaskLine({ item, style }) {
    const [showDeleteButton, setShowDeleteButton] = React.useState(false);
    return (
        <div
            className={TaskLineCss.taskLine}
            onMouseEnter={() => setShowDeleteButton(true)}
            onMouseLeave={() => setShowDeleteButton(false)}
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

            {showDeleteButton && <DeleteButton item={item} />}
        </div>
    );
}
