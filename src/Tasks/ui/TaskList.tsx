import React, { useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import { Task } from './Task';
import { useActionCreators, useAppSelector } from '../../store';
import { tasksActions,  tasksSelectors } from '../slice/tasksSlice';

export const TaskList = () => {
    
    const taskList = useAppSelector(tasksSelectors.taskList)

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

