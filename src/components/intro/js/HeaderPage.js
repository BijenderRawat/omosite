import Button from "react-bootstrap/Button";
import classes from "../css/HeaderPage.module.css";
import { Link } from "react-router-dom";

const HeaderPage = (props) => {
  return (
    <div className={classes.mainsection}>
      <main>
        <ul className={classes.list}>
          <Link to="/home">Go To Home</Link>
          <Button variant="primary" onClick={props.onShowAuthentication}>
            Get Started
          </Button>{" "}
        </ul>
      </main>
    </div>
  );
};

export default HeaderPage;
