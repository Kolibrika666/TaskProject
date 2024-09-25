import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { FavoriteList, Filter, TaskList } from "./ui";
import { Loading, ModalWindow } from "./shared";
import { Section } from "../styles/components";

export const Tasks = () => {
  return (
    <Section>
      <Navbar>
        <Container>
          <FavoriteList />
          <Navbar.Brand>Мои дела</Navbar.Brand>
          <ModalWindow form="add" name="Новое дело" />
        </Container>
        </Navbar>
        <Filter />
        <TaskList />    
        <Loading/>
      </Section>
   
  );
};
