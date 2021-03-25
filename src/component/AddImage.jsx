import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button, Fade, Grid } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "20px",
  },
  margin: {
    margin: theme.spacing(1),
    // width: "90%",
  },
  button: {
    margin: theme.spacing(1),
    width: "100%",
  },
  alignSelf: {
    alignSelf: "center",
  },
}));

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2,
    },
    "& input:invalid:hover + fieldset": {
      borderColor: "#3f51b5",
      borderWidth: 2,
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2,
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important", // override inline-style
    },
  },
})(TextField);

export default function CustomizedInputs({
  addCard,
  handleChange,
  imgURL,
  heading,
  description,
  handleClick,
}) {
  const classes = useStyles();

  return (
    <Fade in={addCard}>
      <Grid container className={classes.paper} justify="center">
        <form className={classes.root} noValidate>
          <Grid item xs={12} sm={6} md={3}>
            <ValidationTextField
              className={classes.margin}
              label="Image URL"
              required
              variant="outlined"
              value={imgURL}
              name="imgURL"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ValidationTextField
              className={classes.margin}
              label="Heading"
              required
              variant="outlined"
              value={heading}
              name="heading"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ValidationTextField
              className={classes.margin}
              label="Description"
              required
              variant="outlined"
              value={description}
              name="description"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.alignSelf}>
            <Button
              variant="contained"
              color="default"
              className={classes.button}
              startIcon={<CloudUploadIcon />}
              onClick={handleClick}
            >
              Add
            </Button>
          </Grid>
        </form>
      </Grid>
    </Fade>
  );
}
