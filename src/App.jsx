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

const date = new Date();

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [modalImg, setModalImg] = React.useState({});

  const handleOpen = (id) => {
    setOpen(true);
    setModalImg(cards[id]);
  };

  const handleClose = () => {
    setOpen(false);
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
                  <Button variant="contained" color="primary">
                    See My Photo
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
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card, id) => (
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
            card={modalImg}
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
