import React, { Suspense, lazy, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

type ModalWindowType = {
  name: string;
  form: string;
}

const Add = lazy(()=> import('../../ui/AddTask'))

export const ModalWindow = ({form = 'add', name = 'Новое дело'}: ModalWindowType) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
        {name}
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {form == 'add' ? <Suspense><Add/></Suspense> : null}
          </Modal.Body>
        </Modal>
      </>
    )
};

