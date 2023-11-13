import React from "react";
import { createPortal } from "react-dom";
import { Colors } from "../constants/colors";
import classes from "./Modal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onHideCart}/>;
}

function ModalOverlay(props) {
  return (
    <div
      className={classes.modal}
      style={{ backgroundColor: Colors.primaryColor }}
    >
      {props.children}
    </div>
  );
}

const overlayElement = document.getElementById("overlays");

function Modal(props) {
  return (
    <React.Fragment>
      {createPortal(<Backdrop onHideCart={props.onHideCart}/>, overlayElement)}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        overlayElement
      )}
    </React.Fragment>
  );
}

export default Modal;
