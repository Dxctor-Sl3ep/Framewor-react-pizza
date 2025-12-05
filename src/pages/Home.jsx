import PizzaList from '../components/PizzaList';
import '../App.css';

const Home = () => {
    return (
        <main>
            <div className="welcome-section">
                <h2>Acceuil</h2>
            </div>
            <PizzaList />
        </main>
    );
};

export default Home;
