import React, { useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { Task } from "./Task";
import { useActionCreators, useAppSelector } from "../../store";
import { tasksActions, tasksSelectors } from "../slice/tasksSlice";
import { Error, Loading } from "../shared";

export const TaskList = () => {
  const taskList = useAppSelector(tasksSelectors.taskList);
  const isError = useAppSelector(tasksSelectors.isError);
  const isLoad = useAppSelector(tasksSelectors.isLoad);
  

  return (
    <>
     
      <Accordion flush>
        {taskList.map((e) => (
          <Task
            id={e.id}
            description={e.attributes.description}
            status={e.attributes.status}
            name={e.attributes.name}
          />
        ))}
      </Accordion>
      {isLoad ? <Loading /> : null}
      {isError ? <Error/> : null}
    </>
  );
};
