import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { TaskList } from ".";
import { FavoriteTask } from "./FavoriteTask";
import { useAppSelector } from "../../store";
import { tasksSlice } from "../slice/tasksSlice";

export const FavoriteList = () => {
  const favoriteSet = useAppSelector(tasksSlice.selectors.favoriteSet);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          {[...favoriteSet].map((e) => (
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
