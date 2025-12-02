import { CartProvider, useCart } from './contexts/CartContext';
import Header from './components/Header';
import PizzaList from './components/PizzaList';
import './App.css';

const CartSummary = () => {
  const { cart, totalAmount } = useCart();
  if (cart.length === 0) return null;

  return (
    <div className="cart-summary">
      <h2>Votre Panier</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = {item.price * item.quantity} €
          </li>
        ))}
      </ul>
      <h3>Total à payer : {totalAmount} €</h3>
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <div className="app-container">
        <Header />

        <main>
          <div className="welcome-section">
            <h2>Bienvenue sur Pizza Shop !</h2>
          </div>

          <PizzaList />

          <CartSummary />
        </main>
      </div>
    </CartProvider>
  );
}

export default App;