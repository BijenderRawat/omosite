import { ListGroup } from "react-bootstrap";

const Announcement = () => {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li">News #1</ListGroup.Item>
      <ListGroup.Item as="li">News #2</ListGroup.Item>
      <ListGroup.Item as="li">News #3</ListGroup.Item>
      <ListGroup.Item as="li">News #4</ListGroup.Item>
    </ListGroup>
  );
};

export default Announcement;
