import { useState, useRef } from "react";

import { Button } from "react-bootstrap";

import { Form, Link, useSearchParams } from "react-router-dom";

import classes from "../css/AuthenticationForm.module.css";
import AuthenticationModal from "../../modal/js/AuthenticationModal";

const AuthenticationForm = (props) => {
  const idRef = useRef();
  const passwordRef = useRef();

  const [enteredID, setEnteredID] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const idInputChangeHandler = (event) => {
    setEnteredID(event.target.value);
  };

  const passwordInputChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredID.trim() === "") {
      return;
    }
    setEnteredID("");
    setEnteredPassword("");
  };
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";

  return (
    <AuthenticationModal onHideAuthentication={props.onHideAuthentication}>
      <div className={classes.formcontainer}>
        <Form
          method="post"
          className={classes.form}
          onSubmit={formSubmitHandler}
        >
          <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
          <p>
            <label htmlFor="email">OMOTEC ID</label>
            <input
              id="email"
              type="string"
              name="omotecid"
              onChange={idInputChangeHandler}
              ref={idRef}
              value={enteredID}
              required
            />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={passwordInputChangeHandler}
              ref={passwordRef}
              value={enteredPassword}
              required
            />
          </p>
          <div className={classes.actions}>
            <Button
              variant="outline-primary"
              onClick={props.onHideAuthentication}
            >
              Cancel
            </Button>
            {""}
            <Link to={`?mode=${isLogin ? "new" : "login"}`}>
              {isLogin ? "Create a new user" : "Login"}
            </Link>
            <Button
              variant="outline-primary"
              type="submit"
              classes={classes.submit_button}
            >
              Submit
            </Button>
            {""}
          </div>
        </Form>
      </div>
    </AuthenticationModal>
  );
};

export default AuthenticationForm;
