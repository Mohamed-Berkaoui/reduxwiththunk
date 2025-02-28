import { useDispatch } from "react-redux";
import FetchProducts from "./utils/fetchProducts";
import Home from "./pages/Home";
import { Route, Routes } from "react-router";
import UserLayout from "./utils/UserLayout";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import AdminLayout from "./utils/AdminLayout";
import AdminProducts from "./pages/AdminProducts";
import AdminOrders from "./pages/AdminOrders";
import AdminAddProduct from "./pages/AdminAddProduct";

function App() {
  const dispatch = useDispatch();
  FetchProducts(dispatch);

  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route path="" element={<Home />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<AdminProducts />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="add" element={<AdminAddProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
