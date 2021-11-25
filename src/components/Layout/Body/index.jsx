import { Container, makeStyles } from "@material-ui/core";
import Airport from "../../../pages/Airport";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function Body() {
  const classes = useStyle();
  return (
    <Container className={classes.container}>
      <Airport />
    </Container>
  );
}

export default Body;
