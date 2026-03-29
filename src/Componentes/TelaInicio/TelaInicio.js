import React, { useState, useEffect } from 'react';
import './TelaInicio.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ReactCountryFlag from 'react-country-flag';
import CV from '../Arquivos/Curriculo_Gabriel.pdf';
import CVEnglish from '../Arquivos/Curriculo_Gabriel_Inglês.pdf';
import europass from '../Arquivos/Europass.pdf';
import coverletter from '../Arquivos/Carta_Apresentacao_Gabriel_Sales.pdf';
import { motion } from 'framer-motion';


// Digita o título; reinicia corretamente quando `text` muda (ex.: troca de idioma).
// Usa Array.from para iterar por code points Unicode (melhor com emojis no cargo).
const TypeWriter = ({ text, delay = 100, className }) => {
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (text == null || text === '') {
      setCurrentText('');
      return;
    }
    const chars = Array.from(text);
    let i = 0;
    setCurrentText('');
    const id = window.setInterval(() => {
      i += 1;
      setCurrentText(chars.slice(0, i).join(''));
      if (i >= chars.length) {
        window.clearInterval(id);
      }
    }, delay);
    return () => window.clearInterval(id);
  }, [text, delay]);

  return <span className={className}>{currentText}</span>;
};

const TRANSLATIONS = {
  'pt-BR': {
    cargo: 'Engenheiro de Software | Analista de Suporte👨🏻‍💻',
    cvPortugues: 'CV Português',
    cvIngles: 'CV inglês',
    europass: 'Europass',
    coverLetter: 'Cover Letter',
  },
  en: {
    cargo: 'Software Engineer | IT Support Analyst👨🏻‍💻',
    cvPortugues: 'Portuguese CV',
    cvIngles: 'English CV',
    europass: 'Europass',
    coverLetter: 'Cover Letter',
  },
  fr: {
    cargo: 'Ingénieur logiciel | Analyste support👨🏻‍💻',
    cvPortugues: 'CV Portugais',
    cvIngles: 'CV Anglais',
    europass: 'Europass',
    coverLetter: 'Lettre de motivation',
  },
  de: {
    cargo: 'Software-Ingenieur | IT-Support-Analyst👨🏻‍💻',
    cvPortugues: 'CV Portugiesisch',
    cvIngles: 'CV Englisch',
    europass: 'Europass',
    coverLetter: 'Anschreiben',
  },
  it: {
    cargo: 'Ingegnere del software | Analista di supporto👨🏻‍💻',
    cvPortugues: 'CV Portoghese',
    cvIngles: 'CV Inglese',
    europass: 'Europass',
    coverLetter: 'Lettera di presentazione',
  },
  ja: {
    cargo: 'ソフトウェアエンジニア | ITサポートアナリスト👨🏻‍💻',
    cvPortugues: 'CV ポルトガル語',
    cvIngles: 'CV 英語',
    europass: 'Europass',
    coverLetter: 'カバーレター',
  },
};

const TelaInicio = ({ locale = 'pt-BR', onLocaleChange }) => {
  const t = TRANSLATIONS[locale] || TRANSLATIONS['pt-BR'];

  const handleFlagKeyDown = (nextLocale) => (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onLocaleChange?.(nextLocale);
    }
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV;
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

  const handleDownloadCoverLetter = () => {
    const link = document.createElement('a');
    link.href = coverletter;
    link.download = 'coverletter.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadEnglishCV = () => {
    const link = document.createElement('a');
    link.href = CVEnglish;
    link.download = 'Curriculo_Gabriel_Inglês.pdf';
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
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0 }}
      >
        <h1 className="nome">
          <TypeWriter text="Gabriel Henriques Sales" className="typing-text" delay={100} />
          <span className="emoji">👋</span>
        </h1>
        <h2 className="cargo">
          <TypeWriter text={t.cargo} className="typing-text" delay={50} />
        </h2>
        <div className="redes-sociais">
          <a
            href="https://github.com/Usales"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gabriel-henriques-sales-43953b218/"
            target="_blank"
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
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.5 }}
        >
          {t.cvPortugues}
        </motion.button>
        <motion.button
          className="botao-curriculo"
          onClick={handleDownloadEnglishCV}
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 1.8 }}
        >
          {t.cvIngles}
        </motion.button>
        <motion.button
          className="botao-curriculo"
          onClick={handleDownloadEuropass}
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 2.0 }}
        >
          {t.europass}
        </motion.button>
        <motion.button
          className="botao-curriculo"
          onClick={handleDownloadCoverLetter}
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 2.5 }}
        >
          {t.coverLetter}
        </motion.button>
      </div>
      <motion.div
        className="bandeiras-idiomas"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 2.8 }}
        title="Idiomas: Português (BR), Inglês, Francês, Alemão, Italiano, Japonês"
      >
        <div
          className="flag-container flag-container--clickable"
          role="button"
          tabIndex={0}
          onClick={() => onLocaleChange?.('pt-BR')}
          onKeyDown={handleFlagKeyDown('pt-BR')}
          title="Brasil - Português"
          aria-label="Alternar para Português (Brasil)"
        >
          <span className="flag">
            <ReactCountryFlag countryCode="BR" svg style={{ width: '1.75rem', height: '1.75rem' }} />
          </span>
        </div>
        <div
          className="flag-container flag-container--clickable"
          role="button"
          tabIndex={0}
          onClick={() => onLocaleChange?.('en')}
          onKeyDown={handleFlagKeyDown('en')}
          title="Reino Unido - Inglês"
          aria-label="Switch to English"
        >
          <span className="flag">
            <ReactCountryFlag countryCode="GB" svg style={{ width: '1.75rem', height: '1.75rem' }} />
          </span>
        </div>
        <div
          className="flag-container flag-container--clickable"
          role="button"
          tabIndex={0}
          onClick={() => onLocaleChange?.('fr')}
          onKeyDown={handleFlagKeyDown('fr')}
          title="França - Francês"
          aria-label="Passer en français"
        >
          <span className="flag">
            <ReactCountryFlag countryCode="FR" svg style={{ width: '1.75rem', height: '1.75rem' }} />
          </span>
        </div>
        <div
          className="flag-container flag-container--clickable"
          role="button"
          tabIndex={0}
          onClick={() => onLocaleChange?.('de')}
          onKeyDown={handleFlagKeyDown('de')}
          title="Alemanha - Alemão"
          aria-label="Auf Deutsch wechseln"
        >
          <span className="flag">
            <ReactCountryFlag countryCode="DE" svg style={{ width: '1.75rem', height: '1.75rem' }} />
          </span>
        </div>
        <div
          className="flag-container flag-container--clickable"
          role="button"
          tabIndex={0}
          onClick={() => onLocaleChange?.('it')}
          onKeyDown={handleFlagKeyDown('it')}
          title="Itália - Italiano"
          aria-label="Passa all'italiano"
        >
          <span className="flag">
            <ReactCountryFlag countryCode="IT" svg style={{ width: '1.75rem', height: '1.75rem' }} />
          </span>
        </div>
        <div
          className="flag-container flag-container--clickable"
          role="button"
          tabIndex={0}
          onClick={() => onLocaleChange?.('ja')}
          onKeyDown={handleFlagKeyDown('ja')}
          title="Japão - Japonês"
          aria-label="日本語に切り替え"
        >
          <span className="flag">
            <ReactCountryFlag countryCode="JP" svg style={{ width: '1.75rem', height: '1.75rem' }} />
          </span>
        </div>
      </motion.div>
      <motion.div
        className="scroll-indicator"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: 'easeOut', delay: 4.0 }}
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
