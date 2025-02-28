import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

function Home() {
  const products = useSelector((state) => state.products);
  return (
    <div className="d-flex flex-wrap p-4 justify-content-center gap-4">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default Home;
