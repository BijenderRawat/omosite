import AuthenticationForm from "./AuthenticationForm";

import classes from "../css/Authentication.module.css";

const Authentication = (props) => {
  return (
    <main className={classes.authentication}>
      <div className={classes.leftseperator}></div>
      <AuthenticationForm onHideAuthentication={props.onHideAuthentication} />
      <div className={classes.rightseperator}></div>
    </main>
  );
};

export default Authentication;
