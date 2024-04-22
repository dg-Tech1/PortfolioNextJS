// src/components/SkillsPage/FilmDesign.js
import React from 'react';
import styles from './SkillsPage.module.css'; // Assurez-vous d'importer le fichier CSS
import Image from 'next/image';

const FilmDesign = () => {
  return (
    <div className={styles.containerX}>
      <div className={styles.test}> {/* Utilisez la classe styles.test */}
        <Image src="/images/skills1.webp" alt="API" title='Base de données' width={350} height={250} />
        <Image src="/images/skills2.webp" alt="Website" title='Website Design' width={350} height={250} />
        <Image src="/images/skills3.webp" alt="SEO" title='Référencement'  width={350} height={250} />
      </div>
    </div>
  );
};

export default FilmDesign;