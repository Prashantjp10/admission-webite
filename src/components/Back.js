import React from 'react'
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export const Back = () => {
    let navigate = useNavigate();
  return (
     <>
        {" "}
        <Button onClick={() => navigate(-1)}>Back</Button>
     </>
  );
}
