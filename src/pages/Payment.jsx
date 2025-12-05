import '../App.css';
import { useCart } from '../contexts/CartContext';

const Payment = () => {
    const { emptyCart } = useCart();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Votre commande va être livrée');
        e.target.reset();
        emptyCart();
        window.location.hash = '#home';
    };

    const handlePhoneInput = (e) => {
        const cleaned = e.target.value
            .replace(/[.,]/g, '') // retire virgules et points
            .replace(/[^0-9]/g, ''); // ne garde que les chiffres
        e.target.value = cleaned.slice(0, 10); // limite à 10 caractères
    };

    return (
        <main>
            <h1>Paiement</h1>
            <form className="payment-form" onSubmit={handleSubmit}>
                <h3>Procéder au paiement</h3>
                <label>
                    Nom
                    <input type="text" name="lastname" required />
                </label>
                <label>
                    Prénom
                    <input type="text" name="firstname" required />
                </label>
                <label>
                    Numéro de téléphone (ex: 0694857863)
                    <input
                        type="tel"
                        name="phone"
                        inputMode="numeric"
                        pattern="\d{10}"
                        maxLength={10}
                        onInput={handlePhoneInput}
                        required
                    />
                </label>
                <label>
                    Adresse mail
                    <input type="email" name="email" required />
                </label>
                <label>
                    Adresse
                    <input type="text" name="address" required />
                </label>
                <label>
                    Code Postal
                    <input type="text" name="zipcode" required />
                </label>
                <label>
                    Carte Bleu
                    <input type="text" name="card" required />
                </label>
                <button type="submit">Payer</button>
            </form>
        </main>
    );
};

export default Payment;
