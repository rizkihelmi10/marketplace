import { useState, useEffect } from "react";
import useProductStore from "../store/productStore";

function Marketplace() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const addProduct = useProductStore((state) => state.addProduct);
  const cart = useProductStore((state) => state.cart);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading....</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Daftar produk</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title} />
            <button onClick={() => addProduct(product)}>Add to cart</button>
          </div>
        ))}
      </div>
      {console.log(cart)}
    </div>
  );
}

export default Marketplace;
