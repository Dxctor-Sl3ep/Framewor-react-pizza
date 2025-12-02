import { useCart } from '../contexts/CartContext';

export default function PizzaCard({ pizza }) {
    const { cart, addToCart, removeFromCart } = useCart();

    const cartItem = cart.find((item) => item.id === pizza.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    return (
        <div className="pizza-card">
            <img src={pizza.image} alt={pizza.name} />
            <h3>{pizza.name}</h3>
            <p className="description">{pizza.description}</p>
            <div className="price-action">
                <span className="price">{pizza.price} €</span>

                {quantity === 0 ? (
                    <button onClick={() => addToCart(pizza)}>Ajouter au panier</button>
                ) : (
                    <div className="counter">
                        <button onClick={() => removeFromCart(pizza.id)}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => addToCart(pizza)}>+</button>
                    </div>
                )}
            </div>
        </div>
    );
}