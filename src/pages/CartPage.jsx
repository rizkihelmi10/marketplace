import useStore from "../stores/useStore";
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { username, products, cart, addToCart, removeFromCart } = useStore();
    const navigate = useNavigate();

    const cartSet = new Set(cart);

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h2>Halaman Keranjang Belanja (logged in as @{username})</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <h2>&#128188; Keranjang Belanja : {cart.length}</h2>
                    <button onClick={() => navigate('/marketplace')} style={{ padding: '8px' }}>&#128269; KEMBALI KE MARKETPLACE</button>
                    <button onClick={() => navigate('/checkout')} style={{ padding: '8px' }}>&#128176; <strong>CHECKOUT</strong></button>
                </div>
            </div>
            <div className="products">
                {Array.from(cartSet).map(productId => {
                    const product = products.find(product => product.id === productId);
                    const itemCount = cart.filter(id => id === productId).length;
                    return (
                        <div className="productCard" key={product.id}>
                            <div>
                                <img src={product.image} />
                                <p><strong>${product.price}</strong></p>
                                <p>{product.title}</p>
                            </div>
                            <div className="actionButton">
                                <p><span className="stars">★ </span>{product.rating.rate} | {product.rating.count} ratings</p>
                                <span>
                                    <button onClick={() => removeFromCart(product.id)}>-</button>
                                    &nbsp;&nbsp;&nbsp;Jumlah : {itemCount}&nbsp;&nbsp;&nbsp;
                                    <button onClick={() => addToCart(product.id)}>+</button>
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default CartPage;