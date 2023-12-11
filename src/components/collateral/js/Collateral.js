import {
  collatoralLeftData,
  collatoralMiddleData,
  collatoralRightData,
} from "../../../resources/collateral/js/CollatoralData";

import CollateralModal from "../../../resources/collateral/js/CollateralModal";
import classes from "../css/Collateral.module.css";

const Collateral = () => {
  return (
    <div className={classes.collateral_list}>
      <div className={classes.collateral_leftlist}>
        {collatoralLeftData.map((modal) => (
          <CollateralModal {...modal} />
        ))}
      </div>
      <div className={classes.collateral_middlelist}>
        {collatoralMiddleData.map((modal) => (
          <CollateralModal {...modal} />
        ))}
      </div>
      <div className={classes.collateral_rightlist}>
        {collatoralRightData.map((modal) => (
          <CollateralModal {...modal} />
        ))}
      </div>
    </div>
  );
};

export default Collateral;
