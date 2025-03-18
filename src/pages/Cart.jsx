import useProductStore from "../store/productStore";

function Cart() {
  const cart = useProductStore((state) => state.cart);
  const removeProduct = useProductStore((state) => state.removeProduct);
  const total = useProductStore((state) => state.total);

  return (
    <div>
      <h2>Keranjang</h2>
      {cart.length === 0 && <p>Wah, keranjang belanjamu kosong</p>}
      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <img src={product.image} alt={product.title} />
            <button onClick={() => removeProduct(product.id)}>
              Hapus dari Keranjang
            </button>
          </div>
        ))}
      </div>
      <p>Total Harga: {total}</p>
      {console.log(total)}
      <button>Checkout</button>
    </div>
  );
}

export default Cart;
