import {
  Container,
  makeStyles,
  Typography,
  Tooltip,
  useMediaQuery,
  useTheme,
  Modal,
} from "@material-ui/core";
import { useState } from "react";
import {
  Bookmark,
  ExitToApp,
  Home,
  List,
  Person,
  PlayCircleOutline,
  Settings,
  Storefront,
} from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
  container: {
    height: "100vh",
    color: "white",
    position: "sticky",
    top: 0,
    paddingTop: theme.spacing(10),
    backgroundColor: "#252c3f",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#f2f2f2",
      outline: "1px solid slategrey",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    [theme.breakpoints.up("sm")]: {
      display: (props) => (props.Sidebar ? "none" : "block"),
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      cursor: "pointer",
    },
  },
  icon: {
    marginRight: theme.spacing(1),
    fontSize: "18px",
    // [theme.breakpoints.up("sm")]: {},
  },
  text: {
    fontWeight: 500,
    // [theme.breakpoints.down("sm")]: {
    //   display: "none",
    // },
  },
  containerModal: {
    width: "170px",
    height: "100%",
    color: "white",
    background: "white",
    position: "absolute",
    top: 0,
    left: 0,
    // bottom: 0,
    paddingTop: theme.spacing(4),
    backgroundColor: "#252c3f",
    [theme.breakpoints.down("sm")]: {
      // width: "100vw",
      // height: "100vh",
    },
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#f2f2f2",
      outline: "1px solid slategrey",
    },
  },
}));

function Leftbar({ Sidebar, setOpenMobile, openMobile }) {
  const classes = useStyle({ Sidebar });
  const theme = useTheme();
  const screenExtraSmall = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <>
      <Container className={classes.container}>
        <div className={classes.item}>
          <Tooltip title="dashboard">
            <Home className={classes.icon} />
          </Tooltip>
          <Typography className={classes.text}>Dashboard</Typography>
        </div>
        <div className={classes.item}>
          <Tooltip title="Users">
            <Person className={classes.icon} />
          </Tooltip>
          <Typography className={classes.text}>Users</Typography>
        </div>
        <div className={classes.item}>
          <List className={classes.icon} />
          <Typography className={classes.text}>Lists</Typography>
        </div>
        <div className={classes.item}>
          <PlayCircleOutline className={classes.icon} />
          <Typography className={classes.text}>Sales</Typography>
        </div>
        <div className={classes.item}>
          <Bookmark className={classes.icon} />
          <Typography className={classes.text}>Collection</Typography>
        </div>
        <div className={classes.item}>
          <Storefront className={classes.icon} />
          <Typography className={classes.text}>Products</Typography>
        </div>
        <div className={classes.item}>
          <Settings className={classes.icon} />
          <Typography className={classes.text}>Setting</Typography>
        </div>
        <div className={classes.item}>
          <ExitToApp className={classes.icon} />
          <Typography className={classes.text}>Logout</Typography>
        </div>
      </Container>
      <Modal open={openMobile}>
        <Container className={classes.containerModal}>
          <div
            className={classes.item}
            onClick={() => setOpenMobile(!openMobile)}
          >
            <ExitToApp className={classes.icon} />
            <Typography className={classes.text}>Logout</Typography>
          </div>
          <div
            className={classes.item}
            onClick={() => setOpenMobile(!openMobile)}
          >
            <ExitToApp className={classes.icon} />
            <Typography className={classes.text}>Logout</Typography>
          </div>
        </Container>
      </Modal>
    </>
  );
}

export default Leftbar;
