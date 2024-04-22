import { useState } from 'react';
import styles from './ProjectPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink, faVideo } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import NextImage from 'next/image';

export default function ProjectPage() {
    const [index, setIndex] = useState(0);

    const images = [
        { src: "https://source.unsplash.com/random?landscape,nature", popoverText: "Trouver des hébergements et des activités dans n’importe quelle ville. En tant que développeur, j'ai construit l'interface de l'agent, tant pour pc de bureaux que mobile entièrement responsive. HTML CSS ", videoLink: "https://i.imgur.com/jglVdKm.png", title: "Booki", googlePlayLink: "https://github.com/dg-Tech1/bookiprojet3", appStoreLink: "https://dg-tech1.github.io/bookiprojet3/"}, 
        { src: "https://i.imgur.com/uCHUkNL.jpeg", popoverText: "Menus gastronomiques avec réservations et compositions de repas. HTML CSS/Animation", videoLink: "https://dg-tech1.github.io/ohmyfoodp4/index.html", title: "OhMyFood", googlePlayLink: "https://github.com/dg-Tech1/ohmyfoodp4", appStoreLink: "https://dg-tech1.github.io/ohmyfoodp4/index.html"},
        { src: "https://i.imgur.com/TeB1yAD.jpeg", popoverText: "Location Immo, construit à partir d'un fichier .JSON. ReactJS CSS ", videoLink: "https://imgur.com/azSdcR7", title: "Kasa", googlePlayLink: "https://github.com/dg-Tech1/kasa-ocr-p8", appStoreLink: "https://kasa-ocr-p8.vercel.app/"},
        { src: "https://i.imgur.com/r99vZsM.jpeg", popoverText: "Architecte Intérieur .L'utilisateur doit pouvoir se connecter avec les identifiants, et la possibilité de modifier/ajouter des éléments. CSS JS NodeJS ", videoLink: "https://imgur.com/a/BwGblaE", title: "Sophie Buel", googlePlayLink: "https://github.com/dg-Tech1/SophieBuelP6", appStoreLink: "https://imgur.com/a/BwGblaE"},
        { src: "https://i.imgur.com/xY9dgOh.png", popoverText: "Mon premier Portfolio construit à partir de HTML/CSS/JavaScript/JSON ", videoLink: "https://i.imgur.com/TqySWhA.png", title: "Portfolio HTML", googlePlayLink: "https://github.com/dg-Tech1/portfolio", appStoreLink: "https://dg-tech1.github.io/portfolio/"}, 
        { src: "https://i.imgur.com/eIrbPx1.jpeg", popoverText: "Travail pour le site: Photographe oro, référencement sur internet/SEO ", videoLink: "https://i.imgur.com/eIrbPx1.jpeg", title: "Nina Carducci", googlePlayLink: "https://github.com/dg-Tech1/nina-carducci-p9", appStoreLink: "https://dg-tech1.github.io/nina-carducci-p9/"},
        { src: "https://i.imgur.com/JRAJaaP.jpg", popoverText: "Premier pas dan JavaScript, réalisation d'un carousel pour le site d'une imprimerie familiale. ", videoLink: "https://i.imgur.com/pl2y5AY.png", title: "Print It!", googlePlayLink: "https://github.com/dg-Tech1/Print-it-JS-P5", appStoreLink: "https://dg-tech1.github.io/Print-it-JS-P5/"},
        { src: "https://i.imgur.com/FncCYzJ.jpg", popoverText: "App bancaire avec accueil, une interface utilisateur où l'on peut se connecter de manière sécurisée pour accéder à ses données et transactions, possibilité de modifier pseudos, et nommer les transactions. React HTML CSS Redux MongoDB ", videoLink: "https://i.imgur.com/gngH6XI.mp4", title: "Argent Bank", googlePlayLink: "https://github.com/dg-Tech1/p11ArgentBank", appStoreLink: "https://i.imgur.com/gngH6XI.mp4"},
        { src: "https://i.imgur.com/i0CC4bK.jpg", popoverText: "Célèbre jeu Tic Tac Toe écrit en JS, vous pouvez jouer avec l'IA ", videoLink: "https://dg-tech1.github.io/TicTacToe/", title: "Tic Tac Toe", googlePlayLink: "https://github.com/dg-Tech1/TicTacToe", appStoreLink: "https://dg-tech1.github.io/TicTacToe/"}
        
        
        
        
        // Ajoutez d'autres objets ici pour chaque jeu
    ];

    const total = Math.ceil(images.length / 3);

    const updateCarousel = (direction) => {
        if (direction === "prev") {
            setIndex((oldIndex) => (oldIndex - 1 + total) % total);
        } else if (direction === "next") {
            setIndex((oldIndex) => (oldIndex + 1) % total);
        }
    };

    const startIndex = index * 3;

    return (
        <div className={styles.project}>
            <div className={styles.carouselWrapper}>
                <div className={styles.carouselContent}>
                {images.slice(startIndex, startIndex + 3).map((image, i) => (
                    <div className={styles.carouselCard} key={startIndex + i}>
                        <NextImage src={image.src} alt="Game" width={350} height={350} />
                        <div className={styles.carouselTitle}>{image.title}</div>
                        <div className={styles.icons}>
                            <Link href={image.googlePlayLink} target="_blank">
                                <FontAwesomeIcon icon={faGithub} className={styles.iconHover} style={{width: '15px', height: '15px'}} />
                            </Link>
                            <Link href={image.appStoreLink} target="_blank">
                                <FontAwesomeIcon icon={faLink} className={styles.iconHover} style={{width: '15px', height: '15px'}} />
                            </Link>
                        </div>
                        <div className={styles.popover}>
                            {image.popoverText}
                            {image.videoLink ? (
                                <Link href={image.videoLink} target="_blank">
                                    <FontAwesomeIcon icon={faVideo} className={styles.blinkIcon} style={{width: '15px', height: '15px'}} />
                                </Link>
                            ) : null}
                        </div>
                    </div>
                ))}
                </div>
                <div className={styles.carouselNavigation}>
                    <button className={styles.carouselBtnPrev} onClick={() => updateCarousel("prev")}>{"<"}</button>
                    <button className={styles.carouselBtnNext} onClick={() => updateCarousel("next")}>{">"}</button>
                </div>
            </div>
      
        </div>
    );
}