import Button from "react-bootstrap/Button";
import classes from "../css/HeaderPage.module.css";

const HeaderPage = (props) => {
  return (
    <div className={classes.mainsection}>
      <main>
        <ul className={classes.list}>
          <Button variant="primary" onClick={props.onShowAuthentication}>
            Get Started
          </Button>{" "}
        </ul>
      </main>
    </div>
  );
};

export default HeaderPage;
