import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

function AdminOrders() {
  const orders = useSelector((state) => state.orders);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>order id</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr>
            <td>{order.id}</td>
            <td>{order.total} </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default AdminOrders;