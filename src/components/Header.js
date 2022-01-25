import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ backgroundColor: "gray", color: "white" }}>
      <Button
        onClick={() => navigate("/")}
        sx={{ color: "white" }}
        variant="text"
      >
        Table
      </Button>
      <Button
        onClick={() => navigate("/form")}
        sx={{ color: "white" }}
        variant="text"
      >
        Form
      </Button>
    </Box>
  );
};

export default Header;
