import { useState, useEffect, useMemo } from 'react';
import styles from './HomePage.module.css';
import Image from 'next/image';

const TextDesign = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  const words = useMemo(() => ["_Développeur", "Créatif_", "_Logique", "Curieux_", "_Déterminé"], []);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 75);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <p className={styles.paragraph}>
        {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </p>
      <div className={styles.theiconContainer}>
      <a href="https://github.com/dg-Tech1" target="_blank" rel="noopener noreferrer">
  <div style={{ opacity: 0.2 }}>
    <Image
      width={25}
      height={25}
      src="/icones/1github.png"
      alt="Github"
      title='Github'
    />
  </div>
</a>
<a href="https://www.linkedin.com/in/david-gagnon-webdevelopper/" target="_blank" rel="noopener noreferrer">
  <div style={{ opacity: 0.2 }}>
    <Image
      width={25}
      height={25}
      src="/icones/2linkedin3536505.png"
      alt="LinkedIn"
      title='Linkedin'
    />
  </div>
</a>
<a href="/images/200-modele-cv-sobre-2.pdf" target="_blank" rel="noopener noreferrer">
  <div style={{ opacity: 0.2 }}>
    <Image
      width={25}
      height={25}
      src="/icones/Download_icon-icons.com_75235.png"
      alt="Download"
      title='C.V'
    />
  </div>
</a>

    </div>
    </>
  );
};



export default TextDesign;
