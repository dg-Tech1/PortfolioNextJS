import styles from './AboutPage.module.css';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Import Link from next/link

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedSlide, setSelectedSlide] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide % 3) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  

  const handleClick = (slideNumber) => {
    setSelectedSlide(slideNumber);
    setCurrentSlide(slideNumber);
  
    // Réinitialiser selectedSlide après 5 secondes
    setTimeout(() => {
      setSelectedSlide(null);
    }, 5000);
  };
  

  const slideToShow = selectedSlide !== null ? selectedSlide : currentSlide;

  return (
    <section className={styles.container}>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}>
          <Link href="/images/200-modele-cv-sobre-2.pdf" target="_blank" rel="noopener noreferrer"_>
            <div className={styles.cvButton}>
            <Image src="/icones/Download_icon-icons.com_75235.png" alt="Download CV Icon" title= "Download CV Icon"width={50} height={50} className={styles.icon} />



            <span className={styles.monSpan}>Mon CV</span>
            </div>
          </Link>
          <Image src="/images/profil.jpg" alt="" width={768} height={432} style={{display: slideToShow === 1 ? 'block' : 'none'}} />
          <Image src="/images/profil2.gif" alt="" width={768} height={432} style={{display: slideToShow === 2 ? 'block' : 'none'}} />
          <Image src="/images/profil4.gif" alt="" width={768} height={432} style={{display: slideToShow === 3 ? 'block' : 'none'}} />
          <div className={styles.sliderNav}>
            <a onClick={() => handleClick(1)}></a>
            <a onClick={() => handleClick(2)}></a>
            <a onClick={() => handleClick(3)}></a>
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        <p>Je suis David développeur web, avec une formation d’intégrateur web Bac +2 chez OpenClassroom et une expérience en HTML/CSS/SASS, JS, React, Express, Node JS, MongoDB et Wordpress. Mon objectif est de fournir des solutions web de haute qualité qui surpassent les attentes de mes clients. N’hésitez pas à me contacter pour discuter de la façon dont je peux contribuer à votre entreprise.</p>
      </div>
    </section>
  );
}
