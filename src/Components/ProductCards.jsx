import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider";

const ProductCards = ({ id, image, name, price }) => {
  let history = useHistory();
  const { userId, updateUserId } = useContext(AuthContext);

  const Buy = () => {
    if (userId === 0) {
      history.push({
        pathname: "/login",
        redirect: "buy",
        pid: id,
      });
    } else {
      history.push(`/purchase/` + id);
    }
  };

  return (
    <div className="col-lg-3 col-md-2 col-sm-12">
      <Card border="primary" style={{ width: "15rem", height: "23rem" }}>
        <Card.Header>{name}</Card.Header>
        <Card.Img variant="top" src={image} height="200" width="200" />
        <Card.Body>
          <Card.Text>Price : ${price}</Card.Text>
          <Card.Link onClick={() => Buy()}>Buy</Card.Link>
          <Card.Link as={Link} to={`/products/` + id + `/` + userId}>
            Details
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCards;
