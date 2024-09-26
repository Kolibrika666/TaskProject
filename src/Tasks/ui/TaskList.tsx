import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { Task } from "./Task";
import { useActionCreators, useAppSelector } from "../../store";
import { tasksActions, tasksSelectors } from "../slice/tasksSlice";
import { Error, Loading } from "../shared";
import InfiniteScroll from "react-infinite-scroll-component";

export const TaskList = () => {
  const taskList = useAppSelector(tasksSelectors.taskList);
  const isError = useAppSelector(tasksSelectors.isError);
  const isLoad = useAppSelector(tasksSelectors.isLoad);
  const hasMore = useAppSelector(tasksSelectors.hasMore);
  const index = useAppSelector(tasksSelectors.index);
  const getMoreList = useActionCreators(tasksActions).getMoreTaskList;

  return (
    <>
      <InfiniteScroll
        dataLength={taskList.length}
        next={getMoreList({
          params: { pagination: { start: index, limit: 12 } },
        })}
        hasMore={hasMore}
        loader={<Loading />}
      >
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
      </InfiniteScroll>
      {isLoad && <Loading />}
      {isError && <Error />}
    </>
  );
};
