//src/pages/index.js:

import { useState, useEffect } from 'react';
import Head from 'next/head';
import HomePage from '../components/HomePage/HomePage.js';
import AboutPage from '../components/AboutPage/AboutPage.js';
import SkillsPage from '../components/SkillsPage/SkillsPage.js';
import ProjectPage from '../components/ProjectPage/ProjectPage.js';
import ContactPage from '../components/ContactPage/ContactPage.js';
import Footer from '../components/Footer/Footer.js'; // Ajoutez cette ligne
import ScrollButton from '../components/ScrollButton/ScrollButton.js';

import Image from 'next/image';

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [language, setLanguage] = useState('en');
  const [activeMenu, setActiveMenu] = useState('');

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changeLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'project', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= window.pageYOffset) {
          setActiveMenu(`#${section}`);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
  <div>
    <div className={theme}>
      <Head>
        <title>David Gagnon | WebDeveloper</title>
        <link rel="icon" href="/icones/icon3.png" />
      </Head>

      <nav className={theme} style={{alignItems: 'center'}}>
        <div id='Logo-Site'>
          <a href="#home" onClick={() => setActiveMenu('#home')}>
             <img src="/icones/logo3.png" alt="Logo du site" />
          </a>
        </div>
        <div id='Menu-Site' className='toggle-btn'>
         <ul>
          <a href="#home" onClick={() => setActiveMenu('#home')} className={activeMenu === '#home' ? 'active' : ''}>Home</a>
          <a href="#about" onClick={() => setActiveMenu('#about')} className={activeMenu === '#about' ? 'active' : ''}>Infos</a>
          <a href="#skills" onClick={() => setActiveMenu('#skills')} className={activeMenu === '#skills' ? 'active' : ''}>Skills</a>
          <a href="#project" onClick={() => setActiveMenu('#project')} className={activeMenu === '#project' ? 'active' : ''}>Projet</a>
          <a href="#contact" onClick={() => setActiveMenu('#contact')} className={activeMenu === '#contact' ? 'active' : ''}>Contact</a>
         </ul>
        </div>
        <div id='Dark-Light'>
         
        <button onClick={changeTheme}>{theme === 'light' ? '🌙' : '☀️'} Screen</button>
          <button onClick={changeLanguage}>{language.toUpperCase()}</button>
        
        </div>
      </nav>

     <main>
       <section id="home">
       <HomePage />
       </section>
       <section id="about">
         <h2 className="indexTitle"><span>A Propos</span></h2>
         <AboutPage />
       </section>
       <section id="skills">
         <h2 className="indexTitle"><span>Skills</span></h2>
         <SkillsPage />
       </section>
       <section id="project">
       <h2 className="indexTitle"><span>Projet</span></h2>
        <ProjectPage />
       </section>
       <section id="contact">
        <h2 className="indexTitle"><span>Contact</span></h2>
        <ContactPage />
       </section>
     </main>
     <Footer /> {/* Ajoutez cette ligne */}
     <ScrollButton />
    </div>
  </div>
  );
}
