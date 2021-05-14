import React from 'react';
import '../../static/styles/select.scss';

const SelectFilter = (props) => {

    const { name, value } = props;

    return (
        <div>
            <select
                className="select-filter"
                name={name}
            >
                <option value={value} className="selected-filter__option">
                    Inglés
                </option>
                <option value={value} className="selected-filter__option">
                    Japonés
                </option>
            </select>
        </div>
    )
}

export default SelectFilter
