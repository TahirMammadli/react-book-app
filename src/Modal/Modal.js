import React from "react";
import ReactDOM from "react-dom";
import { Fragment } from "react/cjs/react.production.min";
import Card from "../UI/Card";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onCloseModal} className={styles.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modalOverlay}>
      <Card>
        <div className={styles.addBook}>{props.children}</div>
      </Card>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onCloseModal} />,
        document.getElementById("overlays")
      )}
    </Fragment>
  );
};

export default Modal;
