import useProductStore from "../store/productStore";

function Cart() {
  const cart = useProductStore((state) => state.cart);
  const removeProduct = useProductStore((state) => state.removeProduct);
  const total = useProductStore((state) => state.total);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🛒 Keranjang Belanja</h2>

      {cart.length === 0 ? (
        <p style={styles.emptyCart}>Wah, keranjang belanjamu kosong.</p>
      ) : (
        <>
          <div style={styles.cartList}>
            {cart.map((product) => (
              <div key={product.id} style={styles.cartItem}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={styles.productImage}
                />

                <div style={styles.productDetails}>
                  <h3 style={styles.productTitle}>{product.title}</h3>
                  <p style={styles.productDescription}>{product.description}</p>
                  <p style={styles.price}>${product.price.toFixed(2)}</p>

                  <button
                    onClick={() => removeProduct(product.id)}
                    style={styles.removeButton}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div style={styles.totalContainer}>
            <p style={styles.totalText}>
              Total Harga:{" "}
              <span style={styles.totalPrice}>${total.toFixed(2)}</span>
            </p>
            <button style={styles.checkoutButton}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;

// ✅ Styling Object
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
  emptyCart: {
    textAlign: "center",
    fontSize: "18px",
    color: "#555",
  },
  cartList: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  cartItem: {
    display: "flex",
    border: "1px solid #ddd",
    borderRadius: "10px",
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
  productDetails: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  productTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  productDescription: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  removeButton: {
    backgroundColor: "#FF4D4D",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
  },
  removeButtonHover: {
    backgroundColor: "#CC0000",
  },
  totalContainer: {
    marginTop: "20px",
    textAlign: "right",
  },
  totalText: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: "22px",
  },
  checkoutButton: {
    backgroundColor: "#FFD814",
    color: "#111",
    padding: "10px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "10px",
    border: "none",
  },
  checkoutButtonHover: {
    backgroundColor: "#E6B800",
  },
};
