import React from 'react';
import { BsXLg } from 'react-icons/bs';
import DeleteButtonCss from './DeleteButton.module.scss';

export default function DeleteButton({ onClick }) {
    return (
        <button
            type="button"
            className={DeleteButtonCss.deleteButton}
            onClick={onClick}
        >
            <BsXLg className="BsXLg" />
        </button>
    );
}
