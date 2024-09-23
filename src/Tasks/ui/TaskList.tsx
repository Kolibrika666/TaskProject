import React from 'react';
import { Accordion, CloseButton, Col, Container, Row } from 'react-bootstrap';
import { Task } from './Task';

export const TaskList = () => {
    return (

    <Accordion defaultActiveKey="0" flush>
        <Task/>
    </Accordion>
    );
};

