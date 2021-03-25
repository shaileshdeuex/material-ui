import React from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { useStyles } from "../styles";
import CardComponent from "./CardComponent";

function ModalwithEffect({ open, handleClose, card }) {
  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <CardComponent
              handleClick={handleClose}
              buttonAction="Close"
              btnColor="secondary"
              btnVariant="contained"
              {...card}
            />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalwithEffect;
