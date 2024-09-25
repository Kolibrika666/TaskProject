import React, { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import { Task } from './Task';
import { useActionCreators, useAppSelector } from '../../store';
import { tasksActions,  tasksSelectors } from '../slice/tasksSlice';

export const TaskList = () => {
    const getList = useActionCreators(tasksActions).getTaskList
    const taskList = useAppSelector(tasksSelectors.taskList)
    const change = useAppSelector(tasksSelectors.change)

    useEffect(() => {
        getList({params: {}})
    }, [change])

    return (
    <Accordion flush>
{taskList.map((e)=>
    <Task id={e.id}
    description={e.attributes.description}
    status={e.attributes.status}
    name={e.attributes.name}/>
)}
    </Accordion>
    );
};

