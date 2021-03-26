import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@material-ui/core";
import { useStyles } from "../styles";

function CardComponent(props) {
  const {
    id,
    cardImg,
    cardHeading,
    cardDetail,
    handleClick,
    buttonAction,
    btnColor,
    btnVariant,
  } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={cardImg}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h5" gutterBottom>
          {cardHeading}
        </Typography>
        <Typography>{cardDetail}</Typography>
        <CardActions className={classes.modalCardAction}>
          <Button
            size="small"
            color={btnColor ? btnColor : "primary"}
            variant={btnVariant ? btnVariant : "text"}
            onClick={() => handleClick(id)}
          >
            {buttonAction}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default CardComponent;
