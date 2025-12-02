import PizzaCard from './PizzaCard';
import { pizzas } from '../data/pizza';

export default function PizzaList() {
    return (
        <div className="pizza-list">
            {pizzas.map((pizza) => (
                <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
        </div>
    );
}
