import { Grid, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import Navbar from "./components/Layout/Navbar";
import Leftbar from "./components/Layout/Leftbar/index";
import Body from "./components/Layout/Body/index";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

const useStyle = makeStyles((theme) => ({
  Body: {
    backgroundColor: "#f2f2f2",
    width: "100%",
  },
}));

function App() {
  const [Sidebar, setSidebar] = useState(false);
  const theme = useTheme();
  const screenExtraSmall = useMediaQuery(theme.breakpoints.only("xs"));
  const [openMobile, setOpenMobile] = useState(false);

  const classes = useStyle();
  return (
    <div className={classes.Body}>
      <Navbar
        setSidebar={setSidebar}
        Sidebar={Sidebar}
        setOpenMobile={setOpenMobile}
        openMobile={openMobile}
      />
      <Grid container>
        <Grid item sm={2} xs={2} md={2}>
          <Leftbar
            Sidebar={Sidebar}
            setOpenMobile={setOpenMobile}
            openMobile={openMobile}
          />
        </Grid>
        <Grid item sm={Sidebar ? 12 : 10} md={Sidebar ? 12 : 10} xs={12}>
          <Body />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
