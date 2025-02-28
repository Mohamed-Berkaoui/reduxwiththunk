import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { AddToCartAction } from "../redux/cart/actions";

function SingleProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.find((prod) => prod.id == id)
  );
  function handleAddToCart() {
    dispatch(AddToCartAction(product));
  }
  return (
    <div className="single-product">
      <img src={product?.image} alt="" />
      <div>
        <h2>{product?.title} </h2>
        <p>{product?.description} </p>
        <p>{product?.price} </p>
        <button onClick={handleAddToCart}>add to cart</button>
      </div>
    </div>
  );
}

export default SingleProduct;
