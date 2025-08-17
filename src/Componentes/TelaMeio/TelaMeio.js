import React, { useState } from 'react';
import './TelaMeio.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase, FaGitAlt, FaLinux, FaLaptopCode, FaHeadset, FaCogs, FaCode, FaChartBar, FaChartLine, FaChartPie, FaCodeBranch } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiAngular, SiTailwindcss, SiMongodb, SiGithub, SiVite, SiStyledcomponents, SiNodedotjs, SiExpress, SiWebpack, SiPostman, SiFigma, SiCanva, SiAdobephotoshop, SiJetbrains, SiVscodium, SiSpringboot, SiAxios, SiSwagger, SiSupabase, SiUbuntu, SiKalilinux, SiZendesk, SiSlack } from 'react-icons/si';
import { AiFillWindows } from 'react-icons/ai';
import { VscVscode } from 'react-icons/vsc';
import projeto1 from '../Imagens/projeto1.png';
import projeto2 from '../Imagens/projeto2.png';
import projeto3 from '../Imagens/projeto3.png';
import projeto4 from '../Imagens/projeto04.png';
import projeto5 from '../Imagens/projeto5.png';
import FormacaoAcademica from './FormacaoAcademica';
import { motion } from 'framer-motion';


const experienciasDetalhadas = [
  {
    titulo: "Suporte de TI - CIEE - Centro de Integração Empresa-Escola",
    periodo: "set de 2023 - Atual · 1 ano 11 meses",
    local: "Goiânia, Goiás, Brasil · Híbrida",
    resumo: "Estágio em Suporte de TI, atuando no atendimento a usuários internos e externos, manutenção de sistemas, infraestrutura e integração de soluções.",
    detalhes: [
      "Prestar suporte técnico a utilizadores internos e externos, garantindo a continuidade dos serviços de TI.",
      "Analisar a necessidade dos usuários em relação a dúvidas e utilização dos sistemas internos.",
      "Auxiliar na análise e execução de projetos.",
      "Instalar softwares e configurá-los.",
      "Auxiliar na alimentação de dados no sistema.",
      "Registrar atendimentos e disposição aos usuários através de sistema próprio de Help Desk.",
      "Auxiliar no suporte a usuários.",
      "Instalar e configurar equipamentos (micros, notebooks, impressoras, etc.).",
      "Atualizar e manter o inventário de ativos de TI através da ferramenta Lansweeper.",
      "Gerir a base de conhecimento com base na metodologia KCS (Knowledge-Centered Service).",
      "Apoiar na configuração e ativação de firewalls SonicWall na rede interna da organização.",
      "Realizar deslocações técnicas para suporte presencial em diferentes unidades.",
      "Mapear e documentar a infraestrutura de rede para fins de gestão e melhoria contínua.",
      "Registar solicitações de pagamento e interações com áreas contábeis através do sistema FLUIG.",
      "Executar upgrades e substituições de hardware em equipamentos informáticos.",
      "Participar na implementação e integração de novos sistemas.",
      "Administrar plataformas de suporte como Jira Software e Zendesk.",
      "Integrar sistemas através do consumo de APIs REST.",
      "",
      "Competências Técnicas:",
      "- Sistemas e ferramentas: Jira Software (admin), Zendesk (admin), ServiceNow, Lansweeper, FLUIG",
      "- Linguagens e tecnologias: HTML5, CSS3, React, MySQL, APIs REST",
      "- Gestão de conhecimento e suporte: Metodologia KCS, Help Desk, gestão de tickets",
      "- Redes e infraestrutura: Mapeamento de rede, configuração de SonicWall, substituição de hardware",
      "- Desenvolvimento e integração: Aplicações web para suporte técnico e integração de sistemas",
      "- Soft skills: Comunicação eficaz, capacidade de resolução de problemas, proatividade, trabalho em equipa",
      "- Boas práticas: Familiaridade com ITIL e metodologias de suporte estruturado"
    ]
  },
  {
    titulo: "Desenvolvedor Freelancer UpWork",
    periodo: "2024 - Atual · 1 ano 7 meses",
    resumo: "Desenvolvimento de sites institucionais, landing pages e sistemas web para clientes diversos, utilizando principalmente React.js, Angular, JavaScript, HTML5, CSS3 e Tailwind CSS.",
    detalhes: [
      "Criação de sites responsivos e otimizados para SEO.",
      "Desenvolvimento de sistemas personalizados conforme demanda do cliente.",
      "Integração com APIs e bancos de dados.(Alguns casos)",
      "Acompanhamento do cliente desde a primeira reunião até a entrega final.",
      "Manutenção e atualização de projetos já entregues(Mediante novas propostas).",
      "Entrega da documentação do Site detalhada."
    ]
  },
  {
    titulo: "Desenvolvedor de software - Novo Mundo S.A.",
    periodo: "mar de 2022 - mar de 2023 · 1 ano 1 mês",
    local: "Goiânia, Goiás, Brasil · Presencial",
    resumo: "Desenvolvedor Trainee. Atuação em desenvolvimento, manutenção e suporte de sistemas, além de participação em projetos web e mobile.",
    detalhes: [
      "Gerenciar chamados de suporte técnico, atendendo usuários internos e externos com eficiência e cordialidade.",
      "Desenvolver, testar e realizar manutenção contínua em sistemas e softwares, garantindo qualidade e desempenho.",
      "Programar utilizando linguagens como Java, JavaScript, Python, ou outras conforme o projeto, aplicando boas práticas de codificação.",
      "Realizar depuração (debugging) e testes unitários para assegurar a funcionalidade e a estabilidade dos programas.",
      "Participar na análise de requisitos e colaborar com equipes para melhoria contínua dos sistemas.",
      "Executar melhorias, otimizações e atualizações em softwares existentes, visando melhor experiência do usuário e eficiência.",
      "Utilizar ferramentas de versionamento como Git para controle e gerenciamento de código.",
      "Aprender e aplicar metodologias ágeis (Scrum, Kanban) no desenvolvimento e entrega de soluções.",
      "Atuar no desenvolvimento web, utilizando frameworks como Vue.js.",
      "Desenvolver aplicativos mobile com Flutter.",
      "Trabalhar com containerização e orquestração usando Docker."
    ]
  }
];

const TelaMeio = () => {
  const projetos = [
    {
      nome: "Ecommerce MyMonster",
      descricao: "Site tipo: Ecommerce | loja de bebidas",
      imagem: projeto1,
      link: "https://mymonsterr.netlify.app/",
      tecnologias: [
        { nome: "HTML5", icone: <FaHtml5 /> },
        { nome: "TailwindCSS", icone: <SiTailwindcss /> },
        { nome: "JavaScript", icone: <FaJs /> },
        { nome: "React", icone: <FaReact /> },
        { nome: "Vite", icone: <SiVite /> }
      ]
    },
    {
      nome: "SpaceApp",
      descricao: "Site tipo: Album de fotos | Site de astrofotografias",
      imagem: projeto2,
      link: "https://spaceappp.netlify.app/",
      tecnologias: [
        { nome: "HTML5", icone: <FaHtml5 /> },
        { nome: "CSS3", icone: <FaCss3Alt /> },
        { nome: "JavaScript", icone: <FaJs /> },
        { nome: "React", icone: <FaReact /> },
        { nome: "Vite", icone: <SiVite /> }
      ]
    },
    {
      nome: "Uai-Jordan",
      descricao: "Site tipo: Loja Feito de calçados",
      imagem: projeto3,
      link: "https://uai-jordan.netlify.app/",
      tecnologias: [
        { nome: "HTML5", icone: <FaHtml5 /> },
        { nome: "CSS3", icone: <FaCss3Alt /> },
        { nome: "JavaScript", icone: <FaJs /> },
        { nome: "React", icone: <FaReact /> }
      ]
    },
    {
      nome: "PentaBooks",
      descricao: "Site tipo: Biblioteca",
      imagem: projeto4,
      link: "https://pentabooks.netlify.app/",
      tecnologias: [
        { nome: "HTML5", icone: <FaHtml5 /> },
        { nome: "CSS3", icone: <FaCss3Alt /> },
        { nome: "JavaScript", icone: <FaJs /> },
        { nome: "API", icone: <SiSwagger /> },
        { nome: "Axios", icone: <SiAxios /> },
        { nome: "React", icone: <FaReact /> }

      ]
    },
    {
      nome: "SISPE",
      descricao: "Sistema tipo: Gestão de Pessoas",
      imagem: projeto5,
      link: "https://sispe.netlify.app/",
      tecnologias: [
        { nome: "HTML5", icone: <FaHtml5 /> },
        { nome: "CSS3", icone: <FaCss3Alt /> },
        { nome: "JavaScript", icone: <FaJs /> },
        { nome: "React", icone: <FaReact /> },
        { nome: "Vite", icone: <SiVite /> },
        { nome: "Supabase", icone: <SiSupabase /> }
      ]
    }];

  const habilidades = [
    {
      categoria: "Backend",
      items: [
        { nome: "Java", icone: <FaJava /> },
        { nome: "Spring Boot", icone: <SiSpringboot /> },
        { nome: "Node.js", icone: <SiNodedotjs /> },
        { nome: "Express", icone: <SiExpress /> },
        { nome: "API", icone: <SiSwagger /> }
      ]
    },
    {
      categoria: "Banco de Dados",
      items: [
        { nome: "PL/SQL", icone: <FaDatabase /> },
        { nome: "PostgreSQL", icone: <SiPostgresql /> },
        { nome: "MongoDB", icone: <SiMongodb /> },
        { nome: "Supabase", icone: <SiSupabase /> }
      ]
    },
    {
      categoria: "Front-end",
      items: [
        { nome: "HTML5", icone: <FaHtml5 /> },
        { nome: "CSS3", icone: <FaCss3Alt /> },
        { nome: "JavaScript", icone: <FaJs /> },
        { nome: "TypeScript", icone: <SiTypescript /> },
        { nome: "React.js", icone: <FaReact /> },
        { nome: "Angular", icone: <SiAngular /> },
        { nome: "Tailwind", icone: <SiTailwindcss /> },
        { nome: "Styled Components", icone: <SiStyledcomponents /> },
        { nome: "Webpack", icone: <SiWebpack /> },
      ]
    },
    {
      categoria: "Ferramentas",
      items: [
        { nome: "Git", icone: <FaGitAlt /> },
        { nome: "GitHub", icone: <SiGithub /> },
        { nome: "Vite", icone: <SiVite /> },
        { nome: "Postman", icone: <SiPostman /> },
        { nome: "Axios", icone: <SiAxios /> },
        { nome: "PowerBI", icone: <FaChartPie style={{color: '#64FFDA'}} /> },
        { nome: "Windows", icone: <AiFillWindows style={{color: '#64ffda'}} /> },
        { nome: "Linux", icone: <FaLinux /> },
        { nome: "Ubuntu", icone: <SiUbuntu /> },
        { nome: "Kali Linux", icone: <SiKalilinux /> },
        { nome: "IntelliJ IDEA", icone: <SiJetbrains /> },
        { nome: "VS Code", icone: <VscVscode /> },
        { nome: "Zendesk", icone: <SiZendesk /> },
        { nome: "GLPI", icone: <FaHeadset /> },
        { nome: "Slack", icone: <SiSlack /> },
      ]
    },
    {
      categoria: "Design",
      items: [
        { nome: "Figma", icone: <SiFigma /> },
        { nome: "Canva", icone: <SiCanva /> },
        { nome: "Photoshop", icone: <SiAdobephotoshop /> },
      ]
    },
    {
      categoria: "Experiências",
      items: [
        { nome: "FullStack", icone: <FaLaptopCode />, experiencia: "1 ano" },
        { nome: "Suporte de TI", icone: <FaHeadset />, experiencia: "3 anos" },
        { nome: "Low-Code | ChatBots", icone: <FaCode />, experiencia: "1 ano" },
      ]
    }
  ];

  const [experienciaSelecionada, setExperienciaSelecionada] = useState(null);

  const MotionH2 = ({ children, delay = 0 }) => (
    <motion.h2
      className="titulo-projetos"
      initial={{ y: -60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      exit={{ y: -60, opacity: 0 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.7 }}
    >
      {children}
    </motion.h2>
  );

  return (
    <div className="tela-meio">
      {/* <h2 className="titulo-habilidades">Habilidades e Ferramentas</h2> */}
      <div className="container-habilidades">
        {habilidades.map((categoria, index) => (
          <motion.div
            key={index}
            className="categoria"
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.7, delay: index * 0.18, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="titulo-categoria">{categoria.categoria}</h3>
            <div className="grid-habilidades">
              {categoria.items.map((item, itemIndex) => (
                <div 
                  key={itemIndex} 
                  className="habilidade-item"
                  data-experiencia={item.experiencia}
                >
                  <div className="icone">{item.icone}</div>
                  <span className="nome-habilidade">{item.nome}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <MotionH2 delay={0.1}>Projetos</MotionH2>
      <div className="container-projetos">
        {projetos.map((projeto, index) => (
          <motion.a
            key={index}
            href={projeto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-projeto"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.10, opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.13, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="imagem-container">
              <img src={projeto.imagem} alt={projeto.nome} className="imagem-projeto" />
              <div className="overlay">
                <h3 className="nome-projeto">{projeto.nome}</h3>
                <p className="descricao-projeto">{projeto.descricao}</p>
                <div className="tecnologias-container">
                  {projeto.tecnologias.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-card">
                      <div className="tech-icon">{tech.icone}</div>
                      <span className="tech-name">{tech.nome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Seção Sobre Mim */}
      <MotionH2 delay={0.2}>Sobre Mim</MotionH2>
      <div className="container-sobre-mim">
        <div className="sobre-mim-foto">
          <img src={require('../Imagens/foto.png')} alt="Gabriel Henriques Sales" className="foto-sobre-mim" />
        </div>
        <div className="sobre-mim-texto">
          <p>
            Sou Gabriel Henriques Sales, desenvolvedor FullStack de 21 anos, com experiência no desenvolvimento de interfaces web, design de telas e suporte técnico. Tenho conhecimento em Angular, React, Tailwind CSS, TypeScript, JavaScript, HTML5, CSS3 e ferramentas de design como Figma e Photoshop.
          </p>
          <p>
            Atualmente trabalho como Suporte de TI, mas continuo buscando minha vaga com foco em desenvolvimento enquanto melhoro e prático minhas habilidades com foco na criação de interfaces responsivas, acessíveis e visualmente funcionais.
          </p>
          <p>
            Consigo me comunicar em Português, Inglês, Espanhol e entendo Italiano e Japonês.
          </p>
        </div>
      </div>
      
     {/* Seção Experiências */}
     <MotionH2 delay={0.3}>Experiências</MotionH2>
     <div className="container-experiencias">
       {experienciasDetalhadas.map((exp, idx) => (
         <motion.div
           key={idx}
           className="experiencia-item experiencia-clickable"
           onClick={() => setExperienciaSelecionada(exp)}
           style={{ cursor: 'pointer' }}
           initial={{ x: -80, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           exit={{ x: -80, opacity: 0 }}
           transition={{ duration: 0.7, delay: idx * 0.18, ease: 'easeOut' }}
           viewport={{ once: false, amount: 0.3 }}
         >
           <h3>{exp.titulo}</h3>
           <span className="experiencia-periodo">{exp.periodo}</span>
           <p>{exp.resumo}</p>
         </motion.div>
       ))}
     </div>

     {/* Modal de Detalhes da Experiência */}
     {experienciaSelecionada && (
       <div className="modal-experiencia-overlay">
         <div className="modal-experiencia">
           <button className="fechar-modal" onClick={() => setExperienciaSelecionada(null)}>&times;</button>
           <h2>{experienciaSelecionada.titulo}</h2>
           {experienciaSelecionada.local && (
             <span className="experiencia-periodo">{experienciaSelecionada.local}</span>
           )}
           <span className="experiencia-periodo">{experienciaSelecionada.periodo}</span>
           <p>{experienciaSelecionada.resumo}</p>
           <div className="modal-experiencia-conteudo-scroll">
             <ul>
               {experienciaSelecionada.detalhes.map((det, i) => (
                 <li key={i}>{det}</li>
               ))}
             </ul>
           </div>
         </div>
       </div>
     )}

     {/* Seção Certificações */}
     {/* Adicione aqui o componente de certificações, se necessário */}

     {/* Seção Formação Acadêmica */}
     <MotionH2 delay={0.4}>Formação Acadêmica</MotionH2>
     <FormacaoAcademica />
    </div>
  );
};

export default TelaMeio;
