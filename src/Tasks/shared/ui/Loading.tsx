import React from "react";
import { Spinner } from "react-bootstrap";
import {MessageContain } from "../../../styles";

export const Loading = () => {
  return (
    <MessageContain>
      <Spinner animation="border" variant="secondary" />
    </MessageContain>
  );
};
