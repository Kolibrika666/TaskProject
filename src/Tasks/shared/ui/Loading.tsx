import React from "react";
import { Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <div>
      <Spinner animation="border" variant="secondary" />
    </div>
  );
};
