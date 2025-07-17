import React, { useState, useEffect } from 'react';
import './TelaInicio.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import curriculo from '../Arquivos/Curriculo_Gabriel.pdf';
import europass from '../Arquivos/Europass.pdf';
import { motion } from 'framer-motion';


//Digita o titulo
const TypeWriter = ({ text, delay = 100, className }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span className={className}>{currentText}</span>;

};

//Link download curriculo


const TelaInicio = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = curriculo;
    link.download = 'Curriculo_Gabriel_Sales.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadEuropass = () => {
    const link = document.createElement('a');
    link.href = europass;
    link.download = 'Europass.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="tela-inicio">
      <motion.div
        className="conteudo"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h1 className="nome">
          <TypeWriter text="Gabriel Henriques Sales" className="typing-text" delay={100} />
          <span className="emoji">👋</span>
        </h1>
        <h2 className="cargo">
          <TypeWriter text="Desenvolvedor Fullstack" className="typing-text" delay={50} />
        </h2>
        <div className="redes-sociais">
          <a 
            href="https://github.com/Usales" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/gabriel-henriques-sales-43953b218/" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
      <div className="botoes-curriculo">
        <motion.button
          className="botao-curriculo"
          onClick={handleDownload}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.9, ease: 'easeOut' }}
        >
          Currículo
        </motion.button>
        <motion.button
          className="botao-curriculo"
          onClick={handleDownloadEuropass}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.9, ease: 'easeOut' }}
        >
          Europass
        </motion.button>
      </div>
      <motion.div
        className="scroll-indicator"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.8, delay: 2.9, ease: 'easeOut' }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrows">
          <span className="arrow">↓</span>
          <span className="arrow">↓</span>
          <span className="arrow">↓</span>
        </div>
      </motion.div>
    </div>
  );
};

export default TelaInicio;
