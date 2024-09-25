import React, { useEffect } from 'react';
import { BaseSelect, FormOption } from '../shared';
import { selectOption } from '../models';
import { useActionCreators, useAppSelector } from '../../store';
import { tasksActions, tasksSelectors } from '../slice/tasksSlice';

export const Filter = () => {
    const getList = useActionCreators(tasksActions).getTaskList
    const setFilterStatus = useActionCreators(tasksActions).setFilterStatus
    const status = useAppSelector(tasksSelectors.filterStatus)
    const change = useAppSelector(tasksSelectors.change)

    useEffect(() => {
        getList({params: {}})
    }, [status, change])

    const onSelectChange = (query?: FormOption<string>) => {
        setFilterStatus(query?.value)
    }
    return (
        <>
            <BaseSelect options={selectOption} onChange={onSelectChange}/>
        </>
    );
};

