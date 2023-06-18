/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import CheckCss from '../styles/Check.module.scss';

export default function Check({ item, onChange }) {
    return (
        <div className={CheckCss.container}>
            <div className={CheckCss.round}>
                <input
                    type="checkbox"
                    checked={item.isDone}
                    onChange={onChange}
                    id={`checkbox${item.id}`}
                />
                <label htmlFor={`checkbox${item.id}`} />
            </div>
        </div>
    );
}
