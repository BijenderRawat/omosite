import { Link } from "react-router-dom";
import classes from "../css/CollateralModal.module.css";

const CollateralModal = (props) => {
  return (
    <div className={classes.collateralmodal_mainoverlay}>
      <div
        className={classes.collateralmodal_leftoverlay}
        style={{ backgroundColor: props.color }}
      >
        <img src={props.subject_img} alt={props.alt} height="20" />
      </div>
      <div className={classes.collateralmodal_rightoverlay}>
        <div className={classes.collateralmodal_collateralname}>
          <h5>
            <Link
              to={props.navigateto}
              style={{ textDecoration: "none", color: "black" }}
            >
              {props.subjectname}
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CollateralModal;
