import { Box, Button, Tabs, Tab } from "@mui/material";
import { Link } from "react-router-dom";
import db from "./db/db";

export default function Buttons() {
  return (
    <>
      <Button
        component={Link}
        sx={{ textTransform: "none" }}
        to="/buttons"
        variant="contained"
      >
        upload
      </Button>
      <Button
        variant="contained"
        sx={{ display: "block", mx: "auto", my: 1 }}
        onClick={db}
      >
        connect db
      </Button>
    </>
  );
}
