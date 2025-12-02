import { useCart } from '../contexts/CartContext';

export default function Cart() {
    const { cart, totalAmount } = useCart();
    if (cart.length === 0) return null;

    return (
        <aside className="cart-panel">
            <h2>Mon Panier</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div>
                            <strong>{item.name}</strong>
                            <div>{item.quantity} x {item.price} €</div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-total">Total : <strong>{totalAmount} €</strong></div>
        </aside>
    );
}
