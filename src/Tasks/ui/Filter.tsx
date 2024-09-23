import React from 'react';
import { BaseSelect } from '../shared';
import { selectOption } from '../models';

export const Filter = () => {
    const onSelectChange = () => {

    }
    return (
        <>
            <BaseSelect options={selectOption} onChange={onSelectChange}/>
        </>
    );
};

