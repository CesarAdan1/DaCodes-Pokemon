import React from 'react';
import '../../static/styles/select.scss';

const SelectFilter = ({ name, value }) => {
    return (
        <div>
            <select
                className="select-filter"
                name={name}
            >
                <option value={value} className="selected-filter__option">
                    Selecciona Categoría
                </option>
            </select>
        </div>
    )
}

export default SelectFilter
