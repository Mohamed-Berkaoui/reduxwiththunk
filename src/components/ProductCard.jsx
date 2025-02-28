import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";

function ProductCard({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} height={180} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Link to={"/products/" + product.id}>
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
