import { useState } from "react";

import Authentication from "../../authentication/js/Authentication";
import HeaderPage from "./HeaderPage";

import classes from "../css/IntroPage.module.css";

const IntroPage = () => {
  const [authenticationForm, setAuthenticationForm] = useState(false);
  function showAuthentication() {
    setAuthenticationForm(true);
  }
  function hideAuthentication() {
    setAuthenticationForm(false);
  }
  return (
    <>
      {authenticationForm && (
        <Authentication onHideAuthentication={hideAuthentication} />
      )}
      <div className={classes.maindiv}>
        <HeaderPage onShowAuthentication={showAuthentication} />
      </div>
    </>
  );
};

export default IntroPage;
