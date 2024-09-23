import React, { Suspense, lazy, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

type ModalWindowType = {
  form: string;
}

const Add = lazy(()=> import('../../ui/AddTask'))
const Update = lazy(()=> import('../../ui/UpdateTask'))

export const ModalWindow = ({form = 'add'}: ModalWindowType) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Твоя задача</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              {form == 'add' ? 
              <Suspense><Add/></Suspense> :
              form == 'update' ? 
              <Suspense><Update/></Suspense>
              : null
              }
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Закрыть
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Сохранить
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
};

