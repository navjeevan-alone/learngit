import React from "react";
import useFetch from "./useFetch";
import ProductCard from "./ProductCard";
import Loading from "./Loading";
function Products() {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("http://localhost:8000/products");

  return (
    <>
      <div className="container card  ">
        <h2 className="header-h2 products-title">Products</h2>
        {error && <h2 className="loading">{error}</h2>}
        {isPending && <Loading />}
        <div className="product-container">
          {!isPending &&
            products.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Products;
