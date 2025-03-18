import {useStore} from '../store/useStore';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'

const MarketplacePage = () => {
    const { username, products, setProducts, cart, addToCart } = useStore();
    // const navigate = useNavigate();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <>
        <div>
            <Navbar />
        </div>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                padding: '20px',
                background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
                borderRadius: '10px',
                margin: '70px'
            }}>
                <h2 style={{ 
                    color: '#2c3e50', 
                    fontSize: '28px',
                    fontWeight: '600',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    marginBottom: '15px'
                }}>
                    Welcome, {username}! ✨
                </h2>
                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '20px',
                    background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
                    padding: '15px 25px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    border: '1px solid rgba(255,255,255,0.8)',
                    backdropFilter: 'blur(10px)'
                }}>
                    <h2 style={{ 
                        color: '#e67e22',
                        fontSize: '20px',
                        fontWeight: '600',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        margin: '0'
                    }}>
                        <span role="img" aria-label="briefcase">💼</span>
                        Cart Items: {cart.length}
                    </h2>
                    <button 
                        onClick={() => navigate('/cart')} 
                        style={{ 
                            padding: '12px 28px',
                            background: 'linear-gradient(145deg, #3498db, #2980b9)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontSize: '16px',
                            fontWeight: '500',
                            boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}
                        onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                        onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                    >
                        <span role="img" aria-label="eyes">👀</span>
                        View Cart
                    </button>                </div>
            </div>
            <div className="products" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                padding: '20px',
                background: '#f8f9fa'
            }}>
                {products.map(product => (
                    <div className="productCard" key={product.id} style={{
                        background: 'white',
                        borderRadius: '12px',
                        padding: '20px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s ease',
                        cursor: 'pointer',
                        ':hover': {
                            transform: 'translateY(-5px)'
                        }
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <img 
                                src={product.image} 
                                style={{
                                    width: '200px',
                                    height: '200px',
                                    objectFit: 'contain',
                                    marginBottom: '15px'
                                }}
                            />
                            <p style={{ 
                                fontSize: '24px', 
                                color: '#EE4D2D ', 
                                fontWeight: 'bold',
                                margin: '10px 0'
                            }}>${product.price}</p>
                            <p style={{ 
                                fontSize: '16px',
                                color: '#34495e',
                                height: '48px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }}>{product.title}</p>
                        </div>
                        <div className="actionButton" style={{
                            marginTop: '15px',
                            borderTop: '1px solid #eee',
                            paddingTop: '15px'
                        }}>
                            <p style={{ color: '#f39c12' }}>
                                <span className="stars" style={{ color: '#f1c40f' }}>★ </span>
                                {product.rating.rate} | {product.rating.count} ratings
                            </p>
                            <button 
                                onClick={() => addToCart(product.id)}
                                style={{
                                    width: '100%',
                                    padding: '12px',
                                    background: '#EE4D2D',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '6px',
                                    marginTop: '10px',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s ease',
                                    ':hover': {
                                        background: '#219a52'
                                    }
                                }}
                            >
                                + Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default MarketplacePage;