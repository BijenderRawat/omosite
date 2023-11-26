import MainNavigation from "../../navigation/js/MainNavigation";

import classes from "../css/ErrorPage.module.css";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main className={classes.content}>
        <h1>An Error Occured!</h1>
        <p>Could Not Find This Page</p>
      </main>
    </>
  );
};

export default ErrorPage;
