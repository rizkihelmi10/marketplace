import {useStore} from '../store/useStore';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { username, products, cart, addToCart, removeFromCart } = useStore();
    const navigate = useNavigate();

    const cartSet = new Set(cart);

    return (
        <div className="cart-container">
            <header className="cart-header">
                <h2>Halaman Keranjang Belanja (logged in as @{username})</h2>
                <div className="cart-actions">
                    <h2 className="cart-count">💼 Keranjang Belanja : {cart.length}</h2>
                    <button 
                        className="btn btn-secondary"
                        onClick={() => navigate('/marketplace')}
                    >
                        🔍 KEMBALI KE MARKETPLACE
                    </button>
                    <button 
                        className="btn btn-primary"
                        onClick={() => navigate('/checkout')}
                    >
                        💰 <strong>CHECKOUT</strong>
                    </button>
                </div>
            </header>
            <div className="products-grid">
                {Array.from(cartSet).map(productId => {
                    const product = products.find(product => product.id === productId);
                    const itemCount = cart.filter(id => id === productId).length;
                    return (
                        <div className="product-card" key={product.id}>
                            <div className="product-info">
                                <img src={product.image} alt={product.title} className="product-image" />
                                <p className="product-price"><strong>${product.price}</strong></p>
                                <p className="product-title">{product.title}</p>
                            </div>
                            <div className="product-actions">
                                <p className="product-rating">
                                    <span className="stars">★ </span>
                                    {product.rating.rate} | {product.rating.count} ratings
                                </p>
                                <div className="quantity-controls">
                                    <button 
                                        className="btn btn-quantity"
                                        onClick={() => removeFromCart(product.id)}
                                    >
                                        -
                                    </button>
                                    <span className="quantity-display">Jumlah : {itemCount}</span>
                                    <button 
                                        className="btn btn-quantity"
                                        onClick={() => addToCart(product.id)}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CartPage;