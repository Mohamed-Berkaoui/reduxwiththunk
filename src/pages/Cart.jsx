import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Navigate } from "react-router";
import { Button } from "react-bootstrap";
import appAxios from "../utils/appAxios";
import { toast } from "react-toastify";
import { clearCartAction } from "../redux/cart/actions";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  if (!cart.length) {
    return <Navigate to={"/"} />;
  }
  const total = cart.reduce(function (acc, element) {
    return acc + element.qty * element.product.price;
  }, 0);

  function submitOrder() {
    toast.promise(
      appAxios.post("/orders", { cart: cart, total: total }).then((res) => {
        console.log(res.data);
        dispatch(clearCartAction())
      }),
      { pending: "loading", success: "success", error: "error" }
    );
  }
  return (
    <>
      <div>
        {cart.map((element) => (
          <CartItem element={element} key={element.product.id} />
        ))}
      </div>
      <hr />
      <h4>total: {Math.round(total, 2)}</h4>*
      <Button onClick={submitOrder}>order now</Button>
    </>
  );
}

export default Cart;
