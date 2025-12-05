import { useCart } from '../contexts/CartContext';

export default function Header() {
    const { cart, totalAmount } = useCart();
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="header">
            <h1>🍕 Pizza Shop</h1>
            <nav>
                <a href="#home">Accueil</a>
                <a href="#cart">Panier ({totalItems}) : {totalAmount} €</a>
                <a href="#payment">Paiement</a>
            </nav>
        </header>
    );
}