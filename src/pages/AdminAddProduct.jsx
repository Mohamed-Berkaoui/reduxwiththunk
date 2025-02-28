import React from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postProductAction } from "../redux/products/actions";

function AdminAddProduct() {
  const dispatch = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const newProd = {
      title: e.target.title.value,
      price: e.target.price.value,
      description: e.target.description.value,
      image: e.target.image.value,
      category: e.target.category.value,
    };
    dispatch(postProductAction(newProd));
  }
  return (
    <div>
      <Form className="w-50 p-4 bg-secondary m-auto text-light" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>title</Form.Label>
          <Form.Control type="text" placeholder="title" name="title" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>price</Form.Label>
          <Form.Control type="number" placeholder="title" name={"price"} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>descrption</Form.Label>
          <Form.Control
            type="text"
            placeholder="description"
            name={"description"}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>category</Form.Label>
          <Form.Control type="text" placeholder="category" name={"category"} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>image</Form.Label>
          <Form.Control type="text" placeholder="image" name={"image"} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AdminAddProduct;
