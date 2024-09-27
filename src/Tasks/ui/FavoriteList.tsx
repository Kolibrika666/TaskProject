import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { FavoriteTask } from "./FavoriteTask";
import { useActionCreators, useAppSelector } from "../../store";
import { tasksSlice } from "../slice/tasksSlice";

export const FavoriteList = () => {
  const favoriteList = useAppSelector(tasksSlice.selectors.favoriteList);
  const favoriteListInLocal = useActionCreators(tasksSlice.actions).getFavoriteList
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    favoriteListInLocal();
  } 

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Избранное
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Избранное</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Здесь отображаются избранные задачи
          <p></p>
          {favoriteList.map((e) => (
            <FavoriteTask
              id={e.id}
              name={e.attributes.name}
              description={e.attributes.description}
              status={e.attributes.status}
            />
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
