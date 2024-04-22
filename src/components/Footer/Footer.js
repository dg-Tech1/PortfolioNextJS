import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Footer.module.css';

const Footer = () => {
    return (
        <footer className="footer" style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', textAlign: 'center', padding: '10px'}}>
            <div className="social-icons">
                <a href="https://github.com/dg-Tech1" target="_blank" rel="noopener noreferrer">
                    <Image src="/icones/1github.png" alt="Github" width={50} height={50} className="icon-footer" />
                </a>
                <a href="https://www.linkedin.com/in/david-gagnon-webdevelopper/" target="_blank" rel="noopener noreferrer">
                    <Image src="/icones/2linkedin3536505.png" alt="LinkedIn" width={50} height={50} className="icon-footer" />
                </a>
            </div>
            <div className="navigation-links">
                <Link href="/" className="nav-link">Home</Link> | 
                <Link href="/#contact" className="nav-link"> Support</Link> | 
            </div>
            <p>© 2024 David Gagnon. Tous les droits sont réservés. </p>
        </footer>
    );
};

export default Footer;
