import React, { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

export const FavoriteList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Избранное</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Здесь отображаются избранные задачи
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
