import {useStore} from "../store/useStore";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CheckoutPage = () => {
    const { username, products, cart, addToCart, removeFromCart } = useStore();
    const navigate = useNavigate();

    const cartSet = new Set(cart);

    let totalHarga = 0;
    cart.forEach(productId => {
        const product = products.find(product => product.id === productId);
        totalHarga += product.price;
    });

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h2>Halaman Checkout (logged in as @{username})</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <h2>&#128184; Total Harga : ${totalHarga.toFixed(2)}</h2>
                    <button onClick={() => navigate('/marketplace')} style={{ padding: '8px' }}>&#128269; KEMBALI KE MARKETPLACE</button>
                    <button onClick={() => Swal.fire({
                        title: "Pembayaran Berhasil!",
                        icon: "success"
                    })} style={{ padding: '8px' }}>&#128176; <strong>BAYAR SEKARANG</strong></button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Produk</th>
                        <th>Harga</th>
                        <th>Jumlah</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from(cartSet).map(productId => {
                        const product = products.find(product => product.id === productId);
                        const itemCount = cart.filter(id => id === productId).length;
                        return (
                            <tr key={product.id}>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td>{itemCount}</td>
                                <td>${product.price * itemCount}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default CheckoutPage;