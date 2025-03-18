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

  const getStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return "★".repeat(fullStars) + (hasHalfStar ? "☆" : "");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Daftar Produk</h2>
      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img
              src={product.image}
              alt={product.title}
              style={styles.productImage}
            />

            <div style={styles.productInfo}>
              <h3 style={styles.productTitle}>{product.title}</h3>

              <div style={styles.ratingContainer}>
                <span style={styles.starRating}>
                  {getStars(product.rating.rate)}
                </span>
                <span style={styles.reviewCount}>
                  {" "}
                  ({product.rating.count} reviews)
                </span>
              </div>

              <p style={styles.price}>${product.price.toFixed(2)}</p>

              <button
                onClick={() => {
                  addProduct(product);
                  alert(`${product.title} Added to Cart`);
                }}
                style={styles.addToCartButton}
              >
                🛒 Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {console.log(cart)}
    </div>
  );
}

export default Marketplace;

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "left",
    fontSize: "24px",
    marginBottom: "20px",
  },
  productList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  productCard: {
    display: "flex",
    border: "1px solid #dddddd",
    borderRadius: "10px",
    gap: "20px",
    padding: "16px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    alignItems: "center",
  },
  productImage: {
    width: "150px",
    height: "150px",
    objectFit: "fit",
    marginRight: "20px",
  },
  productInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  productTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  ratingContainer: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    marginBottom: "8px",
  },
  starRating: {
    color: "#FFA41C",
    fontSize: "16px",
  },
  reviewCount: {
    fontSize: "14px",
    color: "#555",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  addToCartButton: {
    backgroundColor: "#FFD814",
    color: "#111",
    padding: "8px 16px",
    borderRadius: "5px",
    fontSize: "14px",
    fontWeight: "bold",
    width: "150px",
  },
};
