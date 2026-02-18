import React, { useState, useEffect } from 'react';
import './TelaMeio.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase, FaGitAlt, FaLinux, FaLaptopCode, FaHeadset, FaCogs, FaCode, FaChartPie, FaJira } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiAngular, SiTailwindcss, SiMongodb, SiGithub, SiVite, SiStyledcomponents, SiNodedotjs, SiExpress, SiWebpack, SiPostman, SiFigma, SiCanva, SiAdobephotoshop, SiJetbrains, SiSpringboot, SiAxios, SiSwagger, SiSupabase, SiUbuntu, SiKalilinux, SiZendesk, SiMysql, SiOpenai, SiTeamviewer, SiAnydesk, SiJest } from 'react-icons/si';
import { AiFillWindows } from 'react-icons/ai';
import { VscVscode } from 'react-icons/vsc';
import { DiMsqlServer } from 'react-icons/di';
import { IoLogoAndroid } from 'react-icons/io';
import projeto1 from '../Imagens/projeto1.png';
import projeto2 from '../Imagens/projeto2.png';
import projeto3 from '../Imagens/projeto3.png';
import projeto4 from '../Imagens/projeto04.png';
import projeto5 from '../Imagens/projeto5.png';
import projeto6 from '../Imagens/projeto6.png';
import projeto7 from '../Imagens/projeto7.png';
import projeto8 from '../Imagens/projeto8.png';
import FormacaoAcademica from './FormacaoAcademica';
import logoCiee from '../Imagens/logo_ciee.jpg';
import logoUpwork from '../Imagens/logo_upwork.png';
import logoNovoMundo from '../Imagens/logo_novo_mundo.png';
import logoTiSolutions from '../Imagens/ti_solutions_logo.jpg';
import logoSe7e from '../Imagens/se7e_sistemas_logo.jpg';


// Função para calcular período entre datas
const calcularPeriodo = (dataInicio, dataFim = new Date()) => {
  const meses = [
    'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
    'jul', 'ago', 'set', 'out', 'nov', 'dez'
  ];
  
  // Criar data de início de forma segura (evita problemas de fuso horário)
  let inicio;
  if (typeof dataInicio === 'string') {
    const [ano, mes, dia] = dataInicio.split('-').map(Number);
    inicio = new Date(ano, mes - 1, dia);
  } else {
    inicio = new Date(dataInicio);
  }
  
  const fim = dataFim;
  
  const inicioStr = `${meses[inicio.getMonth()]} de ${inicio.getFullYear()}`;
  const fimStr = "Atual";
  
  // Calcular diferença em meses
  const anos = fim.getFullYear() - inicio.getFullYear();
  const mesesDiff = fim.getMonth() - inicio.getMonth();
  const diasDiff = fim.getDate() - inicio.getDate();
  
  let totalMeses = anos * 12 + mesesDiff;
  if (diasDiff < 0) totalMeses -= 1;
  
  let periodoStr = "";
  if (totalMeses < 1) {
    periodoStr = "menos de 1 mês";
  } else if (totalMeses === 1) {
    periodoStr = "1 mês";
  } else if (totalMeses < 12) {
    periodoStr = `${totalMeses} meses`;
  } else {
    const anosCalc = Math.floor(totalMeses / 12);
    const mesesRestantes = totalMeses % 12;
    if (mesesRestantes === 0) {
      periodoStr = anosCalc === 1 ? "1 ano" : `${anosCalc} anos`;
    } else {
      periodoStr = `${anosCalc} ${anosCalc === 1 ? 'ano' : 'anos'} ${mesesRestantes} ${mesesRestantes === 1 ? 'mês' : 'meses'}`;
    }
  }
  
  return `${inicioStr} - ${fimStr} · ${periodoStr}`;
};

const experienciasDetalhadas = [
  {
    titulo: "Analista de Suporte N3 Trainee - SE7E SISTEMAS Unipessoal Limitada",
    logo: logoSe7e,
    periodo: calcularPeriodo('2025-09-01'),
    local: "Av. do Comércio, 25 - Sala 907 - Vila Maria Jose, Goiânia - GO, 74815-390",
    resumo: "Atendimento de chamados técnicos relacionados ao sistema Data7, realizando identificação, análise e resolução de incidentes. Correção de erros em bases de dados e manutenção preventiva de equipamentos.",
    detalhes: [
      "Atendimento de chamados técnicos relacionados ao sistema Data7, realizando identificação, análise e resolução de incidentes reportados pelos utilizadores.",
      "Correção de erros em bases de dados (PostgreSQL, Sybase e Microsoft SQL Server) para assegurar estabilidade, integridade e desempenho das aplicações.",
      "Implementação de atualizações e melhorias no sistema, garantindo a continuidade operacional e a eficiência dos processos internos.",
      "Manutenção preventiva e corretiva de equipamentos (computadores, notebooks, impressoras e periféricos), assegurando o bom funcionamento do parque tecnológico.",
      "Gestão de relacionamento com fornecedores, acompanhando orçamentos, compras e prazos de entrega de equipamentos e serviços.",
      "Execução de testes e validações pós-implementação, garantindo que novas funcionalidades sejam integradas de forma segura e sem impacto na operação.",
      "Colaboração na base de conhecimento interno, documentando procedimentos e soluções para otimizar a produtividade e a qualidade do suporte.",
      "Suporte remoto a utilizadores, configuração e diagnóstico de software.",
      "Instalação e configuração de sistema operativo Windows e Android.",
      "  ↓  ",
      "Competências Técnicas:",
      "- Bancos de dados: PostgreSQL, Sybase, Microsoft SQL Server (2025)",
      "- Sistemas e ferramentas: Data7, TeamViewer, AnyDesk",
      "- Linguagens e tecnologias: SQL",
      "- Gestão e suporte técnico: metodologia KCS, ITIL, gestão de tickets e documentação de incidentes",
      "- Sistemas operativos: Windows 11, Windows Server, Android e VMs",
      "- Soft Skills: comunicação eficaz, liderança, proatividade, capacidade de resolução de problemas, trabalho em equipa e foco em resultados"
    ]
  },
  {
    titulo: "Analista de Suporte Técnico N3 - OMNICHANEL - TI SOLUTIONS TECH INOVATIONS LTDA",
    logo: logoTiSolutions,
    periodo: calcularPeriodo('2025-08-01'),
    local: "Travessa Kalil Karan, 110 - Alto da Rua Xv, Curitiba - PR, 80.045-285",
    resumo: "Prestação de suporte técnico especializado no sistema omnichannel, assegurando o funcionamento contínuo e a satisfação dos clientes corporativos. Atuação no módulo Agents AI com treinamentos personalizados.",
    detalhes: [
      "Prestação de suporte técnico especializado no sistema omnichannel, assegurando o funcionamento contínuo e a satisfação dos clientes corporativos.",
      "Execução de atendimentos diretos a clientes e parceiros, solucionando demandas técnicas relacionadas à integração e configuração da plataforma.",
      "Atuação no módulo Agents AI, conduzindo treinamentos personalizados para equipes de atendimento e revendedores, com foco em integração entre chatbots e ChatGPT.",
      "Implementação e manutenção de ambientes de testes e produção, garantindo a segurança e a integridade dos dados tratados conforme a LGPD (Lei nº 13.709/2018).",
      "Participação em projetos de melhoria contínua, incluindo automação de fluxos de atendimento e padronização de processos internos da equipe técnica.",
      "Responsável por capacitar agentes e usuários na utilização de novas funcionalidades, otimizando a adoção das soluções digitais da empresa.",
      "Colaboração com a área de produto para o desenvolvimento de soluções escaláveis, com base em feedback técnico e análise de incidentes.",
      "Manutenção do sigilo e da integridade das informações empresariais, conforme cláusulas contratuais de confidencialidade e propriedade intelectual.",
      "Catalogar problemas diariamente sobre os chatbots e repassar para equipe de suporte e equipe de desenvolvimento.",
      "  ↓  ",
      "Tecnologias e Ferramentas:",
      "- Omnichannel • ChatGPT API • Agents AI • SQL Server • PostgreSQL",
      "- Ferramentas de suporte remoto e documentação técnica"
    ]
  },
  {
    titulo: "Desenvolvedor Freelancer UpWork",
    logo: logoUpwork,
    periodo: calcularPeriodo('2024-01-01'),
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
    titulo: "Técnico de Informática - CIEE - Centro de Integração Empresa-Escola",
    logo: logoCiee,
    periodo: "ago de 2023 - set de 2025 · 2 anos 1 mês",
    local: "Goiânia, Goiás, Brasil",
    resumo: "Atuação em Suporte de TI, atendimento a usuários internos e externos, manutenção de sistemas, infraestrutura e integração de soluções.",
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
      "  ↓  ",
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
    titulo: "Desenvolvedor de software - Novo Mundo S.A.",
    logo: logoNovoMundo,
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
    },
    {
      nome: "Atende+",
      descricao: "Base de conhecimento para Suporte de TI",
      imagem: projeto6,
      link: "https://atende.netlify.app/",
      tecnologias: [
        { nome: "HTML5", icone: <FaHtml5 /> },
        { nome: "CSS3", icone: <FaCss3Alt /> },
        { nome: "JavaScript", icone: <FaJs /> },
        { nome: "React", icone: <FaReact /> },
        { nome: "Vite", icone: <SiVite /> }
      ]
    },
    {
      nome: "FoodDidDo",
      descricao: "Base de Receitas",
      imagem: projeto7,
      link: "https://fooddiddo.netlify.app/",
      tecnologias: [
        { nome: "HTML5", icone: <FaHtml5 /> },
        { nome: "CSS3", icone: <FaCss3Alt /> },
        { nome: "JavaScript", icone: <FaJs /> },
        { nome: "React", icone: <FaReact /> },
        { nome: "Vite", icone: <SiVite /> },
        { nome: "API", icone: <SiSwagger /> },
        { nome: "Supabase", icone: <SiSupabase />}
      ]
    },
    {
      nome: "EaDuck",
      descricao: "Plataforma de Gestão e Comunicação Escolar",
      imagem: projeto8,
      link: "https://weaduck.netlify.app/login",
      tecnologias: [
        { nome: "Angular", icone: <SiAngular /> },
        { nome: "TypeScript", icone: <SiTypescript /> },
        { nome: "TailwindCSS", icone: <SiTailwindcss /> },
        { nome: "Java", icone: <FaJava /> },
        { nome: "Spring Boot", icone: <SiSpringboot /> },
        { nome: "PostgreSQL", icone: <SiPostgresql /> }
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
        { nome: "API REST", icone: <SiSwagger /> },
        { nome: "SQL", icone: <FaDatabase /> }
      ]
    },
    {
      categoria: "Banco de Dados",
      items: [
        { nome: "PostgreSQL", icone: <SiPostgresql /> },
        { nome: "SQL Server", icone: <DiMsqlServer /> },
        { nome: "MySQL", icone: <SiMysql /> },
        { nome: "Sybase", icone: <FaDatabase /> },
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
        { nome: "Vite", icone: <SiVite /> },
        { nome: "Webpack", icone: <SiWebpack /> },
        { nome: "Jest", icone: <SiJest /> },
      ]
    },
    {
      categoria: "Ferramentas",
      items: [
        // Sistemas e Ferramentas
        { nome: "ChatGPT API", icone: <SiOpenai /> },
        { nome: "TeamViewer", icone: <SiTeamviewer /> },
        { nome: "AnyDesk", icone: <SiAnydesk /> },
        { nome: "Zendesk", icone: <SiZendesk /> },
        { nome: "Jira", icone: <FaJira /> },
        
        // Desenvolvimento
        { nome: "Git", icone: <FaGitAlt /> },
        { nome: "GitHub", icone: <SiGithub /> },
        { nome: "Postman", icone: <SiPostman /> },
        { nome: "Axios", icone: <SiAxios /> },
        { nome: "IntelliJ IDEA", icone: <SiJetbrains /> },
        { nome: "VS Code", icone: <VscVscode /> },
        
        // Sistemas Operacionais
        { nome: "Windows 11", icone: <AiFillWindows style={{ color: '#64ffda' }} /> },
        { nome: "Windows Server", icone: <AiFillWindows style={{ color: '#64ffda' }} /> },
        { nome: "Android", icone: <IoLogoAndroid /> },
        { nome: "Linux", icone: <FaLinux /> },
        { nome: "Ubuntu", icone: <SiUbuntu /> },
        { nome: "Kali Linux", icone: <SiKalilinux /> },
        { nome: "VMs", icone: <FaLaptopCode /> },
        
        // Design e Análise
        { nome: "Figma", icone: <SiFigma /> },
        { nome: "Canva", icone: <SiCanva /> },
        { nome: "Photoshop", icone: <SiAdobephotoshop /> },
        { nome: "PowerBI", icone: <FaChartPie style={{ color: '#64FFDA' }} /> }
      ]
    },
    {
      categoria: "Experiências",
      items: [
        { nome: "FullStack", icone: <FaLaptopCode />, experiencia: "1 ano 9 meses" },
        { nome: "Suporte de TI", icone: <FaHeadset />, experiencia: "4 anos" },
        { nome: "Analista de Sistemas", icone: <FaCogs />, experiencia: "4 meses" },
        { nome: "ChatBots & AI", icone: <FaCode />, experiencia: "4 meses" },
      ]
    }
  ];

  const [experienciaSelecionada, setExperienciaSelecionada] = useState(null);

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && experienciaSelecionada) {
        setExperienciaSelecionada(null);
      }
    };

    if (experienciaSelecionada) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [experienciaSelecionada]);

  return (
    <div className="tela-meio">
      {/* <h2 className="titulo-habilidades">Habilidades e Ferramentas</h2> */}
      <div className="container-habilidades">
        {habilidades.map((categoria, index) => (
          <div
            key={index}
            className="categoria"
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
          </a>
        ))}
      </div>

      {/* Seção Sobre Mim */}
      <h2 className="titulo-projetos">Sobre Mim</h2>
      <div className="container-sobre-mim">
        <div className="sobre-mim-foto">
          <img src={require('../Imagens/foto.png')} alt="Gabriel Henriques Sales" className="foto-sobre-mim" />
        </div>
        <div className="sobre-mim-texto">
          <p>
            Sou Gabriel Henrique Sales, desenvolvedor Full Stack e profissional de Suporte de TI, focado em criar soluções digitais modernas, escaláveis e de alta performance.
          </p>
          <p>
            No front-end, desenvolvo interfaces responsivas e acessíveis com CSS3, JavaScript, TypeScript, Tailwind CSS e Styled Components, aplicando Microfrontends e IA para aprimorar experiência, design e testes.
          </p>
          <p>
            No back-end, atuo na criação e integração de APIs REST, modelagem de dados e implementação de boas práticas de arquitetura e segurança.
          </p>
          <p>
            Com experiência em Suporte Técnico, Helpdesk e redes, possuo visão sistêmica da infraestrutura e domínio de ferramentas como Zendesk e Jira. Sou fluente em português, com inglês avançado e conhecimentos em japonês e italiano, além de habilidades em UX/UI Design, Photoshop e Power BI.
          </p>
        </div>
      </div>

      {/* Seção Experiências */}
      <h2 className="titulo-projetos">Experiências</h2>
      <div className="container-experiencias">
        {experienciasDetalhadas.map((exp, idx) => (
          <div
            key={idx}
            className="experiencia-item experiencia-clickable"
            onClick={() => setExperienciaSelecionada(exp)}
            style={{ cursor: 'pointer', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.2rem', display: 'flex' }}
          >
            <img src={exp.logo} alt={exp.titulo} style={{ width: '70px', height: '70px', objectFit: 'contain', borderRadius: '12px', background: '#fff', padding: '0.3rem', marginBottom: '0.7rem' }} />
            <h3 style={{ margin: 0, color: '#64ffda' }}>{exp.titulo}</h3>
            <span className="experiencia-periodo">{exp.periodo}</span>
            <p style={{ margin: 0, color: '#bdbdbd', fontSize: '1rem' }}>{exp.resumo}</p>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes da Experiência */}
      {experienciaSelecionada && (
        <div className="modal-experiencia-overlay" onClick={() => setExperienciaSelecionada(null)}>
          <div className="modal-experiencia" onClick={(e) => e.stopPropagation()} style={{
            maxHeight: '90vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <button className="fechar-modal" onClick={() => setExperienciaSelecionada(null)}>&times;</button>
            
            {/* Cabeçalho do Modal */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center', 
              gap: '1rem', 
              marginBottom: '2rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '1.5rem',
              flexShrink: 0
            }}>
              <img 
                src={experienciaSelecionada.logo} 
                alt={experienciaSelecionada.titulo} 
                style={{ 
                  width: '90px', 
                  height: '90px', 
                  objectFit: 'contain', 
                  borderRadius: '15px', 
                  background: '#fff', 
                  padding: '0.5rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
                }} 
              />
              <h2 style={{ 
                margin: 0, 
                color: '#64ffda', 
                fontSize: '1.8rem',
                fontWeight: '600' 
              }}>
                {experienciaSelecionada.titulo}
              </h2>
              {experienciaSelecionada.local && (
                <span className="experiencia-periodo" style={{ 
                  fontSize: '1.1rem',
                  fontWeight: '500' 
                }}>
                  {experienciaSelecionada.local}
                </span>
              )}
              <span className="experiencia-periodo" style={{ 
                fontSize: '1.1rem',
                fontWeight: '500' 
              }}>
                {experienciaSelecionada.periodo}
              </span>
            </div>
            
            {/* Conteúdo do Modal */}
            <div className="modal-conteudo-scroll" style={{
              flex: '1',
              overflowY: 'auto',
              paddingRight: '0.5rem',
              minHeight: 0
            }}>
              {/* Resumo */}
              <div style={{ 
                marginBottom: '2rem' 
              }}>
                <h3 style={{ 
                  color: '#64ffda', 
                  fontSize: '1.3rem', 
                  marginBottom: '1rem',
                  borderLeft: '3px solid #64ffda',
                  paddingLeft: '1rem'
                }}>
                  Sobre a Experiência
                </h3>
                <div style={{ 
                  color: '#fff', 
                  fontSize: '1rem', 
                  lineHeight: '1.7',
                  textAlign: 'left'
                }}>
                  {experienciaSelecionada.resumo}
                </div>
              </div>
              
              {/* Detalhes */}
              <div style={{ 
                marginBottom: '3rem',
                paddingBottom: '2rem'
              }}>
                <h3 style={{ 
                  color: '#64ffda', 
                  fontSize: '1.3rem', 
                  marginBottom: '1rem',
                  borderLeft: '3px solid #64ffda',
                  paddingLeft: '1rem'
                }}>
                  Principais Atividades
                </h3>
                <ul>
                  {experienciaSelecionada.detalhes.map((det, i) => (
                    <li key={i}>{det}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Seção Certificações */}
      {/* Adicione aqui o componente de certificações, se necessário */}

      {/* Seção Formação Acadêmica */}
      <h2 className="titulo-projetos">Formação Acadêmica</h2>
      <FormacaoAcademica />
    </div>
  );
};

export default TelaMeio;
