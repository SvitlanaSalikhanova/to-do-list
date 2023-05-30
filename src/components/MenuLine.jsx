import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/FilterSlice';
import { clearCompleted } from '../redux/TasksSlice';
import { SHOW_ACTIVE, SHOW_COMPLETED, SHOW_ALL } from '../FilterConstatnts';
import MenuLineCss from '../styles/MenuLine.module.scss';

export default function MenuLine({ count }) {
    const filter = useSelector((state) => state.filter.filter);
    const dispatch = useDispatch();

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
                    onClick={() => dispatch(setFilter(SHOW_ALL))}
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
                    onClick={() => dispatch(setFilter(SHOW_ACTIVE))}
                >
                    Active
                </button>
                <button
                    type="button"
                    className={filter === SHOW_COMPLETED
                        ? MenuLineCss.filterStateActive
                        : MenuLineCss.filterState}
                    onClick={() => dispatch(setFilter(SHOW_COMPLETED))}
                >
                    Completed
                </button>
            </div>
            <button
                type="button"
                className={MenuLineCss.clearCompleted}
                onClick={() => dispatch(clearCompleted())}
            >
                Clear Completed
            </button>

        </div>
    );
}
