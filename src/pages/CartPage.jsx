import { useStore } from "../store/useStore";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { username, products, cart, addToCart, removeFromCart } = useStore();
  const navigate = useNavigate();

  const cartSet = new Set(cart);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2>🛒 Keranjang Belanja (logged in as @{username})</h2>
        <div style={styles.cartActions}>
          <h2 style={styles.cartCount}>💼 Items in Cart: {cart.length}</h2>
          <button
            style={styles.secondaryButton}
            onClick={() => navigate("/marketplace")}
          >
            🔍 Kembali ke Marketplace
          </button>
          <button
            style={styles.primaryButton}
            onClick={() => navigate("/checkout")}
          >
            💰 <strong>Checkout</strong>
          </button>
        </div>
      </header>

      <div style={styles.productGrid}>
        {Array.from(cartSet).map((productId) => {
          const product = products.find((product) => product.id === productId);
          const itemCount = cart.filter((id) => id === productId).length;

          return (
            <div key={product.id} style={styles.productCard}>
              <img
                src={product.image}
                alt={product.title}
                style={styles.productImage}
              />
              <div style={styles.productInfo}>
                <h3 style={styles.productTitle}>{product.title}</h3>
                <p style={styles.productPrice}>${product.price.toFixed(2)}</p>
                <p style={styles.productRating}>
                  ⭐ {product.rating.rate} | {product.rating.count} reviews
                </p>
              </div>
              <div style={styles.quantityControls}>
                <button
                  style={styles.quantityButton}
                  onClick={() => removeFromCart(product.id)}
                >
                  ➖
                </button>
                <span style={styles.quantityDisplay}>Jumlah: {itemCount}</span>
                <button
                  style={styles.quantityButton}
                  onClick={() => addToCart(product.id)}
                >
                  ➕
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartPage;

const styles = {
  container: {
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
    fontFamily: "'Arial', sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  cartActions: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "15px",
  },
  cartCount: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  primaryButton: {
    backgroundColor: "#ff9900",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  secondaryButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  productGrid: {
    display: "grid",
    gap: "20px",
    justifyContent: "center",
  },
  productCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  productImage: {
    width: "150px",
    height: "150px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  productInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  productTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "8px",
  },
  productPrice: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#B12704",
    marginBottom: "10px",
  },
  productRating: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginTop: "10px",
  },
  quantityButton: {
    backgroundColor: "#FF4D4D",
    color: "#fff",
    padding: "8px",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
  },
  quantityDisplay: {
    fontSize: "16px",
    fontWeight: "bold",
  },
};
