import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

function AdminProducts() {
  const products = useSelector((state) => state.products);
  console.log("🚀 ~ AdminProducts ~ products:", products)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>product</th>
          <th>price</th>
          <th>category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((prod) => (
          <tr>
            <td>{prod.title}</td>
            <td>{prod.price} </td>
            <td>{prod.category} </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default AdminProducts;
