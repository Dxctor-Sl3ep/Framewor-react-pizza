import { useCart } from '../contexts/CartContext';
import '../App.css';

const Cart = () => {
    const { cart, totalAmount, emptyCart } = useCart();

    if (cart.length === 0) {
        return (
            <main>
                <h1>Panier</h1>
                <p>Votre panier est vide</p>
            </main>
        );
    }

    return (
        <main>
            <h1>Panier</h1>
            <div className="cart-summary">
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            {item.name} x {item.quantity} = {item.price * item.quantity} €
                        </li>
                    ))}
                </ul>
                <h3>Total à payer : {totalAmount} €</h3>
                <div className="cart-actions">
                    <button onClick={emptyCart}>Vider le panier</button>
                    <a className="pay-button" href="#payment">Aller au paiement</a>
                </div>
            </div>
        </main>
    );
};

export default Cart;
