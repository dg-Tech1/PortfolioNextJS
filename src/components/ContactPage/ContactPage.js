// src/components/ContactPage/ContactPage.js
import { useState } from 'react';
import styles from './ContactPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faSquareEnvelope, faCheck } from '@fortawesome/free-solid-svg-icons';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(Object.fromEntries(data));
        event.target.reset();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };
    
    return (
        <div className={styles.ContactP}>
            <p>Disponible à tout moment par mail, téléphone, ou en écrivant directement via le formulaire ci-dessous. Pour discuter du projet et la façon dont, je pourrais contribuer à la construction d’un site Web responsive pour votre entreprise. À bientôt!</p>
            <div className={styles.iconContainer}>
                <a href="https://www.google.com/maps/place/Place+Mass%C3%A9na/@43.697233,7.2702365,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOu3DzIesv5CnFta0yOAffCRzlfvGIjBb89HYoc!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOu3DzIesv5CnFta0yOAffCRzlfvGIjBb89HYoc%3Dw114-h86-k-no!7i12000!8i9000!4m11!1m2!2m1!1splace+massena!3m7!1s0x12cddaa15d0a6109:0xefdc1b0f18eb48bf!8m2!3d43.697233!4d7.2702365!10e5!15sCg1wbGFjZSBtYXNzZW5hWg8iDXBsYWNlIG1hc3NlbmGSARNoaXN0b3JpY2FsX2xhbmRtYXJr4AEA!16s%2Fg%2F11dyqr1rx9?entry=ttu" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <FontAwesomeIcon icon={faLocationDot} className={styles.icon} />
                    <p>06, Alpes Maritimes</p>
                </a>
                <a href="tel:07-83-27-07-92" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <FontAwesomeIcon icon={faPhone} className={styles.icon} />
                    <p>Appelez Moi</p>
                </a>
                <a href="mailto:dgbgn01@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                    <FontAwesomeIcon icon={faSquareEnvelope} className={styles.icon} />
                    <p>Envoyez Mail</p>
                </a>
            </div>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="tel" name="phone" placeholder="Phone" required />
                    <textarea name="message" placeholder="Message" required></textarea>
                    <button type="submit">Submit{submitted && <FontAwesomeIcon icon={faCheck} style={{ color: 'green', fontSize: '2em' }} />}</button>
                </form>
            </div>
        </div>
    );
}
