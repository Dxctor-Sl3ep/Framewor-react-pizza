import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Header from './components/Header';
import { CartProvider } from './contexts/CartContext';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);

    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'cart':
        return <Cart />;
      case 'payment':
        return <Payment />;
      default:
        return <Home />;
    }
  };

  return (
    <CartProvider>
      <div className="app-container">
        <Header />
        {renderPage()}
      </div>
    </CartProvider>
  );
};

export default App;