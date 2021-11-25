import {
  Tooltip,
  makeStyles,
  Fab,
  Modal,
  Container,
  TextField,
} from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  container: {
    width: 500,
    height: 550,
    background: "white",
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
}));

function Add() {
  const [open, setOpen] = useState(false);

  const classes = useStyle();
  return (
    <>
      <Tooltip title="Add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form}>
            <div className={classes.item}>
              <TextField label="Title" size="small" fullWidth />
              <TextField label="Description" size="small" fullWidth />
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
}

export default Add;
