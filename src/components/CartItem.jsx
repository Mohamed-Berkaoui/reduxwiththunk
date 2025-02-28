import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { decQuantityAction, incQuantityAction, removeFromCartAction } from "../redux/cart/actions";

function CartItem({ element }) {
  const dispatch = useDispatch();

  return (
    <Card className=" w-75 mx-auto bg-secondary text-light">
      <Card.Header>{element.product.title}</Card.Header>
      <Card.Body>
        <Card.Title> price : {element.product.price}</Card.Title>
        <Card.Text>qunatity : {element.qty}</Card.Text>
        <div className="d-flex gap-4">
          <Button
            variant="primary"
            onClick={() => dispatch(incQuantityAction(element.product))}
          >
            +
          </Button>
          <Button
            variant="primary"
            onClick={() => dispatch(decQuantityAction(element.product))}
          >
            -
          </Button>
          <Button
            variant="danger"
            onClick={() => dispatch(removeFromCartAction(element.product))}
          >
            delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CartItem;
