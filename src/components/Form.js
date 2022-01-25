import { Alert, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";

const Form = () => {
  const [fieldData, setFieldData] = useState([]);
  const [isInserted, setIsInserted] = useState(false);
  console.log(fieldData);

  // get the field data and set them
  const handleFieldData = (e) => {
    setIsInserted(false);
    const field = e.target.name;
    const value = e.target.value;
    const newData = { ...fieldData };
    newData[field] = value;
    setFieldData(newData);
  };

  // handle submit field data
  const handleSubmit = (e) => {
    setIsInserted(false);
    e.preventDefault();
    fetch("https://fierce-taiga-31205.herokuapp.com/data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fieldData),
    })
      .then((res) => res.json())
      .then((data) => {
        data.insertedId && setIsInserted(true);
      });
  };
  return (
    <Container
      sx={{
        display: "flex",
        height: "80vh",
        width: "80vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        {isInserted && <Alert severity="success">Successfully added</Alert>}
        <TextField
          onBlur={handleFieldData}
          fullWidth
          label="Project Name"
          name="projectName"
          required
        />
        <TextField
          onBlur={handleFieldData}
          margin="dense"
          fullWidth
          label="Client Name"
          name="clientName"
          required
        />
        <TextField
          onBlur={handleFieldData}
          fullWidth
          label="Panel Name"
          name="panelName"
          required
        />
        <TextField
          onBlur={handleFieldData}
          margin="dense"
          fullWidth
          label="Page Name"
          name="pageName"
          required
        />
        <TextField
          onBlur={handleFieldData}
          fullWidth
          label="Section Name"
          name="sectionName"
          required
        />
        <TextField
          onBlur={handleFieldData}
          margin="dense"
          fullWidth
          label="Events Name"
          name="eventsName"
          required
        />
        <Button
          type="submit"
          size="large"
          fullWidth
          variant="outlined"
          color="secondary"
          required
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Form;
