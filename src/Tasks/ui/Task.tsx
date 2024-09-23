import React from 'react';
import { Accordion, Button, Container } from 'react-bootstrap';
import { TaskGrid } from '../../styles';
import { CloseButton, LikeButton } from '../../styles/components';

export const Task = () => {
    return (
        <Accordion.Item eventKey="0">
        <Accordion.Header >
          <TaskGrid>
        <h5>Accordion Item #1</h5>
        <Button variant='secondary'>Не выполнено</Button>
        <div>
        <LikeButton/>
        <CloseButton/>
        </div>
        </TaskGrid>
        </Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    );
};
