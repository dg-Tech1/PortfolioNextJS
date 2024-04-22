import React, { useState, useEffect } from 'react';
import styles from './ScrollButton.module.css';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisible);
  
      return () => {
        window.removeEventListener('scroll', toggleVisible);
      };
    }
  }, []);

  return (
    <button className={styles.scrollButton} onClick={scrollToTop} style={{display: visible ? 'block' : 'none'}}>
      <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        Top &#x2191;
      </span>
    </button>
  );
}

export default ScrollButton;

