import React from 'react';
import { SHOW_ACTIVE, SHOW_COMPLETED, SHOW_ALL } from '../../FilterConstatnts';
import MenuLineCss from './MenuLine.module.scss';

export default function MenuLine({
    count, changeFilter, deleteCompleted, filter,
}) {
    return (
        <div className={MenuLineCss.menuLine}>
            <div className={MenuLineCss.count}>
                {count}
                {' '}
                item
                {count !== 1 && 's'}
            </div>

            <div className={MenuLineCss.filters}>
                <button
                    type="button"
                    className={
                        filter === SHOW_ALL
                            ? MenuLineCss.filterStateActive
                            : MenuLineCss.filterState
                    }
                    onClick={() => changeFilter(SHOW_ALL)}
                >
                    All
                </button>
                <button
                    type="button"
                    className={
                        filter === SHOW_ACTIVE
                            ? MenuLineCss.filterStateActive
                            : MenuLineCss.filterState
                    }
                    onClick={() => changeFilter(SHOW_ACTIVE)}
                >
                    Active
                </button>
                <button
                    type="button"
                    className={filter === SHOW_COMPLETED
                        ? MenuLineCss.filterStateActive
                        : MenuLineCss.filterState}
                    onClick={() => changeFilter(SHOW_COMPLETED)}
                >
                    Completed
                </button>
            </div>
            <button
                type="button"
                className={MenuLineCss.clearCompleted}
                onClick={deleteCompleted}
            >
                Clear Completed
            </button>

        </div>
    );
}
