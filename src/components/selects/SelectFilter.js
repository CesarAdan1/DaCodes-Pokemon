import React, { useState } from 'react';
import '../../static/styles/select.scss';

const SelectFilter = () => {

    const { highlight, onClick } = props;

    return (
        <button onClick={onClick} className="select-filter">
            {highlight}
        </button>
    )
}

export default SelectFilter
