import React from 'react';
import './TelaMeio.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiAngular, SiTailwindcss, SiMongodb, SiGithub } from 'react-icons/si';
import projeto1 from '../Imagens/projeto1.png';
import projeto2 from '../Imagens/projeto2.png';
import projeto3 from '../Imagens/projeto3.png';
import projeto4 from '../Imagens/projeto4.png';
import projeto5 from '../Imagens/projeto5.png';




const TelaMeio = () => {
  const projetos = [
    {
      nome: "Ecommerce MyDrugs",
      descricao: "Site inspirado em uma série da Netflix",
      imagem: projeto1,
      link: "https://ecommercemydrugs.netlify.app/"
    },
    {
      nome: "Sistema de Denuncia Ambiental",
      descricao: "Sistema feito como trabalho de faculdade, participação como front-end",
      imagem: projeto2,
      link: "https://github.com/RubensCarvalhoRocha/sistema-denuncia-ambiental-front"
    },
    {
      nome: "Netflix Clone",
      descricao: "Desafio de clone da interface da Netflix em menor tempo",
      imagem: projeto3,
      link: "https://netflisbysales.netlify.app/"
    },
    {
      nome: "EaDuck",
      descricao: "Sistema da Faculdade para Administração Escolar, participação como front-end",
      imagem: projeto4,
      link: "https://eaduck-frontend.netlify.app/login/"
    },
    {
      nome: "SpaceApp",
      descricao: "Site para ver astrofotografias, site feito com a ideia de praticar Vite + React",
      imagem: projeto5,
      link: "https://spaceappp.netlify.app/"
    }];

  const habilidades = [
    {
      categoria: "Linguagens",
      items: [
        { nome: "Java", icone: <FaJava /> },
        { nome: "JavaScript", icone: <FaJs /> },
        { nome: "TypeScript", icone: <SiTypescript /> },
      ]
    },
    {
      categoria: "Banco de Dados",
      items: [
        { nome: "PL/SQL", icone: <FaDatabase /> },
        { nome: "PostgreSQL", icone: <SiPostgresql /> },
        { nome: "MongoDB", icone: <SiMongodb /> },
      ]
    },
    {
      categoria: "Front-end",
      items: [
        { nome: "HTML5", icone: <FaHtml5 /> },
        { nome: "CSS", icone: <FaCss3Alt /> },
        { nome: "JavaScript", icone: <FaJs /> },
        { nome: "TypeScript", icone: <SiTypescript /> },
        { nome: "React.js", icone: <FaReact /> },
        { nome: "Angular", icone: <SiAngular /> },
        { nome: "Tailwind", icone: <SiTailwindcss /> },
      ]
    },
    {
      categoria: "Ferramentas",
      items: [
        { nome: "Git", icone: <FaGitAlt /> },
        { nome: "GitHub", icone: <SiGithub /> },
      ]
    }
  ];

  return (
    <div className="tela-meio">
      <h2 className="titulo-habilidades">Habilidades e Ferramentas</h2>
      <div className="container-habilidades">
        {habilidades.map((categoria, index) => (
          <div key={index} className="categoria">
            <h3 className="titulo-categoria">{categoria.categoria}</h3>
            <div className="grid-habilidades">
              {categoria.items.map((item, itemIndex) => (
                <div key={itemIndex} className="habilidade-item">
                  <div className="icone">{item.icone}</div>
                  <span className="nome-habilidade">{item.nome}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="titulo-projetos">Projetos</h2>
      <div className="container-projetos">
        {projetos.map((projeto, index) => (
          <a 
            key={index} 
            href={projeto.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="card-projeto"
          >
            <div className="imagem-container">
              <img src={projeto.imagem} alt={projeto.nome} className="imagem-projeto" />
              <div className="overlay">
                <h3 className="nome-projeto">{projeto.nome}</h3>
                <p className="descricao-projeto">{projeto.descricao}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TelaMeio;
