import React, { useEffect, useState } from 'react';
import { Accordion, Button} from 'react-bootstrap';
import { TaskGrid } from '../../styles';
import { CloseButton, LikeButton } from '../../styles/components';
import { TaskApi } from '../api/TasksApi';
import { useActionCreators } from '../../store';
import { tasksSlice } from '../slice/tasksSlice';
import { ITaskUpdate } from '../models';

type TaskType = {
  id: number,
  name: string,
  description: string,
  status: string,
  favorite?: boolean,
}


export const FavoriteTask = ({id, name, description, status}: TaskType) => {
  const setChange = useActionCreators(tasksSlice.actions).setChange;
  const onDelete = useActionCreators(tasksSlice.actions).deleteFavoriteList;

  const onChangeStatus = ({id, name, description, status}: TaskType) => {
    const newStatus = (status: string) => {
       return status == 'Выполнено' ? 'Не выполнено' : 'Выполнено'
    } 
    const updateTask:ITaskUpdate = {
      name: name,
      description: description,
      status: String(newStatus(status)),
    }
    TaskApi.putTask(id, updateTask).finally(()=>setChange(1))
  }

    return (
        <Accordion.Item eventKey={String(id)}>
        <Accordion.Header >
          <TaskGrid>
        <h5>{name}</h5>
        <Button variant={
          status == 'Выполнено' ? 'success' : 'secondary'
        } onClick={()=>onChangeStatus}>{status}</Button>
        <div>
        <CloseButton onClick={() => onDelete({
          id: id, attributes: {name: name, description: description, status: status}
        })}/>
        </div>
        </TaskGrid>
        </Accordion.Header>
        <Accordion.Body>
        {description}
        </Accordion.Body>
      </Accordion.Item>
    );
};
