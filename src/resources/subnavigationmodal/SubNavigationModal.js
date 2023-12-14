import { Link } from "react-router-dom";

export default function SubNavigationModal(props) {
  return (
    <li>
      <Link to={props.to} target="blank">
        <img src={props.src} height="20" width="20" alt={props.alt} />
        {props.location}
      </Link>
    </li>
  );
}
