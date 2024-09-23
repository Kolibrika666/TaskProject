import React from "react";
import { Col, Container, Navbar, Row, Stack } from "react-bootstrap";
import { FavoriteList, Filter, TaskList } from "./ui";
import { ModalWindow } from "./shared";
import { Contain } from "../styles/components";

export const Tasks = () => {
  return (
    <Contain>
      <Navbar>
        <Container>
          <FavoriteList />
          <Navbar.Brand>Мои дела</Navbar.Brand>
          <ModalWindow form="add" name="Новое дело" />
        </Container>
        </Navbar>
        <Filter />
        <TaskList />
      </Contain>
   
  );
};
