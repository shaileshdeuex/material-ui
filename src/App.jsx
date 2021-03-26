import React from "react";
import {
  Typography,
  AppBar,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";

import { useStyles } from "./styles";
import ModalwithEffect from "./component/ModalwithEffect";
import CardComponent from "./component/CardComponent";
import { cards } from "./cardData";
import CustomizedInputs from "./component/AddImage";
import Alert from "@material-ui/lab/Alert";

const date = new Date();

// utility function
function checkURL(url) {
  return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

function App() {
  const classes = useStyles();
  const [cardObj, setSetCardObj] = React.useState(cards);
  const [open, setOpen] = React.useState(false);
  const [addCard, setAddCard] = React.useState(false);
  const [errAlert, setErrAlert] = React.useState({
    error: false,
    errMsg: "All fileds are required...!",
  });
  const [cardDetail, setcardDetail] = React.useState({});
  const [imgURL, setImgURL] = React.useState("");
  const [heading, setHeading] = React.useState("");
  const [description, setDescription] = React.useState("");

  const handleOpen = (id) => {
    setOpen(true);
    setcardDetail(cardObj[id]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "imgURL") {
      setImgURL(value);
    } else if (name === "heading") {
      setHeading(value);
    } else if (name === "description") {
      setDescription(value);
    }
    setErrAlert(false);
  };

  const handleClick = () => {
    if (imgURL && heading && description) {
      if (checkURL(imgURL)) {
        setSetCardObj([
          {
            cardImg: imgURL,
            cardHeading: heading,
            cardDetail: description,
          },
          ...cardObj,
        ]);
        setImgURL("");
        setHeading("");
        setDescription("");
        setAddCard(false);
      } else {
        setErrAlert({ error: true, errMsg: "Kindly add valid Image URL...!" });
      }
    } else {
      setErrAlert({ error: true, errMsg: "All fileds are required...!" });
    }
  };
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione,
              reprehenderit animi odit facilis voluptatem minus.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setAddCard(!addCard)}
                  >
                    {addCard ? "Close" : "Add Photo"}
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Contact
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Container maxWidth="md">
            {addCard && (
              <>
                <CustomizedInputs
                  addCard={addCard}
                  handleChange={handleChange}
                  imgURL={imgURL}
                  heading={heading}
                  description={description}
                  handleClick={handleClick}
                />
                {errAlert.error && (
                  <Alert severity="error">{errAlert.errMsg}</Alert>
                )}
              </>
            )}
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cardObj.map((card, id) => (
              <Grid item key={id} xs={12} sm={6} md={4}>
                <CardComponent
                  id={id}
                  handleClick={handleOpen}
                  buttonAction="View"
                  {...card}
                />
              </Grid>
            ))}
          </Grid>
          <ModalwithEffect
            open={open}
            handleClose={handleClose}
            card={cardDetail}
          />
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          <span>&#169;</span> Copyright {date.getFullYear()} By Photo Album
        </Typography>
      </footer>
    </>
  );
}

export default App;
