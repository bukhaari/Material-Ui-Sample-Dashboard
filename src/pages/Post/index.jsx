import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  Card: {
    marginBottom: theme.spacing(5),
  },
  media: {
    height: "300px",
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

function Post() {
  const classes = useStyle();
  return (
    <Card className={classes.Card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/7471084/pexels-photo-7471084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="My Post"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5">
            My first Post
          </Typography> */}
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            atque voluptates dolore. Libero harum aliquam necessitatibus
            officiis at? Cum quam a dicta non incidunt ex illum eius impedit
            suscipit quae? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Libero atque voluptates dolore. Libero harum aliquam
            necessitatibus officiis at? Cum quam a dicta non incidunt ex illum
            eius impedit suscipit quae?
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
