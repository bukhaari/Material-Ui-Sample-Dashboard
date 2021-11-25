import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

import { Cancel, Mail, Notifications, Search, Menu } from "@material-ui/icons";
// import { Menu } from "@mui/icons-material";

import { useState } from "react";

const useStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
  },
  menuIcon: {
    color: "#252c3f",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuIconMobile: {
    color: "#252c3f",
    cursor: "pointer",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logLg: {
    color: "#252c3f",
    display: "block",
    marginLeft: "10px",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "flex"),
    },
  },
  search: {
    // display: "flex",
    alignItems: "center",
    backgroundColor: "#252c3f",
    "&:hover": {
      backgroundColor: "#3c4459",
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    // [theme.breakpoints.down("sm")]: {
    display: (props) => (props.open ? "flex" : "none"),
    width: "30%",
    marginLeft: "46%",
    // },
    [theme.breakpoints.down("sm")]: {
      width: "70%",
      marginLeft: "0%",
    },
  },
  cancel: {
    // [theme.breakpoints.up("sm")]: {
    //   display: "none",
    // },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "20px",
      display: "flex",
    },
    marginLeft: 200,
    display: (props) => (props.open ? "flex" : "none"),
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(2),
  },
  searchBtn: {
    color: "#252c3f",
    marginRight: theme.spacing(2),
    display: (props) => (props.open ? "none" : "flex"),
    // [theme.breakpoints.up("sm")]: {
    //   display: "none",
    // },
  },
  icons: {
    display: "flex",
    alignItems: "center",
    color: "#252c3f",
    [theme.breakpoints.down("sm")]: {
      display: (props) => (props.open ? "none" : "flex"),
    },
  },
  badge: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar({ setSidebar, Sidebar, setOpenMobile, openMobile }) {
  const [open, setOpen] = useState(false);

  const classes = useStyle({ open });

  return (
    <AppBar position="fixed" elevation={1}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.menuItem}>
          <Menu
            className={classes.menuIcon}
            onClick={() => setSidebar(!Sidebar)}
          />
          <Menu
            className={classes.menuIconMobile}
            onClick={() => setOpenMobile(!openMobile)}
          />
          <Typography variant="h6" className={classes.logLg}>
            Reservation
          </Typography>
        </div>
        <div className={classes.search}>
          <Search />
          <InputBase placeholder="Search...." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchBtn} onClick={() => setOpen(true)} />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Avatar>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
