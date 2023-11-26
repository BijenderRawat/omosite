import ReactDOM from "react-dom";

import classes from "../css/AuthenticationModal.module.css";

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} onClick={props.onHideAuthentication} />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

export default function AuthenticationModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onHideAuthentication={props.onHideAuthentication} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}
