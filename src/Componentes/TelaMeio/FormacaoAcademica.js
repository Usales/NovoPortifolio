import React, { useState, useEffect } from 'react';
import './TelaMeio.css';
import logoSenaiFatesg from '../Imagens/faculdade_senai_fatesg_logo.jpeg';
import logoSensu from '../Imagens/faculdadesensu_logo.jpeg';
import logoCpmGo from '../Imagens/LOGO-CEPMG.png';
import logoSenac from '../Imagens/senacbrasil_logo.jpeg';
import logoBasileu from '../Imagens/logo_basileu.png';
import logoKaikan from '../Imagens/logoKaikan.png';

const formacoes = [
  {
    instituicao: "Faculdade SENAI Fatesg",
    logo: logoSenaiFatesg,
    curso: "Bacharelado em Engenharia de Software",
    periodo: "jan de 2022 - dez de 2025",
    descricao: `🎓 Graduando em Engenharia de Software\n\nFormação focada no desenvolvimento de soluções tecnológicas robustas, escaláveis e alinhadas às necessidades do negócio. Base sólida em engenharia de sistemas, arquitetura de software, dados, inteligência artificial e gestão.\n\n💡 Desenvolvimento: Estrutura de Dados, Algoritmos, Engenharia de Requisitos, Testes, Qualidade de Software, Design de Software, IHC e Manutenção de Sistemas\n\n🖥️ Arquitetura: Sistemas Operacionais, Redes, Computação em Nuvem, Sistemas Distribuídos, Governança de Software e Segurança da Informação\n\n📊 Dados & IA: Bancos de Dados Relacionais e Não Relacionais, Mineração de Dados, Big Data, ETL, Inteligência Artificial, Redes Neurais e Análise de Algoritmos\n\n📈 Gestão: Gerência de Projetos, Governança de TI, Engenharia Econômica, Ética e Legislação em TI, Sustentabilidade e TI Verde`,
    competencias: "🎯 Design de Interface do Usuário (UI) · 🧠 Experiência do Usuário (UX) · 💻 Programação · 🌐 Desenvolvimento Front-end · 🔄 Desenvolvimento Full Stack · 🗄️ PostgreSQL · 📊 PL/SQL · ☕ Java · 🟨 JavaScript · 🔷 TypeScript · ⚛️ React.js · 🅰️ AngularJS · 🎨 Figma · 🖌️ Illustrator · 🖥️ CMD · 🛠️ Administração de Redes · 📡 Tecnologia da Informação"
  },
  {
    instituicao: "Faculdade Sensu",
    logo: logoSensu,
    curso: "Bacharelado, Segurança Pública",
    periodo: "jun de 2024 - jun de 2025",
    descricao: `🎓 Formação em Segurança Pública | Faculdade Sensu\n\nEm formação na área de Segurança Pública, com uma abordagem multidisciplinar voltada à análise, prevenção e gestão estratégica da segurança no contexto social contemporâneo.\n\nPrincipais áreas de estudo:\n\n📊 Análise Criminal e Inteligência e Contrainteligência Aplicada\n\n🔍 Criminologia, Prevenção da Violência e Diagnóstico em Segurança Pública\n\n⚖️ Direitos Humanos, Legislação Específica e Execução Penal\n\n🧠 Psicologia, Ética, Filosofia nas Relações e Teoria do Estado\n\n🛠️ Planejamento Estratégico, Modelos de Policiamento e Gestão Institucional\n\n💻 Tecnologias Digitais Aplicadas à Segurança Pública\n\n👥 Atendimento a Grupos Vulneráveis, Negociação e Primeiros Socorros\n\n💡 Em constante desenvolvimento de competências críticas, éticas e técnicas para atuação profissional focada na proteção da sociedade, valorizando os direitos fundamentais e a eficiência nas políticas públicas de segurança.`,
    competencias: "Análise Criminal · Gestão Estratégica em Segurança Pública · Direitos Humanos e Práticas Policiais · Criminologia · Mediação e Técnicas de Negociação"
  },
  {
    instituicao: "KAIKAN - ANBG - Associação Nipo Brasileira de Goiás",
    logo: logoKaikan,
    curso: "Curso de Japonês",
    periodo: "jan de 2021 - dez de 2024",
    descricao: `🇯🇵 Curso de Língua Japonesa | KAIKAN - ANBG\n\nFormação em língua japonesa na Associação Nipo Brasileira de Goiás, desenvolvendo competências comunicativas e culturais para interação efetiva em contextos japoneses.\n\n📚 Conteúdo: Gramática japonesa, sistemas de escrita (Hiragana, Katakana, Kanji), conversação, compreensão auditiva, leitura e escrita\n\n🎌 Cultura: Estudos sobre tradições, costumes e valores da cultura japonesa, facilitando a compreensão intercultural\n\n💬 Comunicação: Desenvolvimento de habilidades para comunicação oral e escrita em diferentes contextos formais e informais`,
    competencias: "Idiomas · Japonês · Hiragana · Katakana · Kanji · Comunicação Intercultural · Cultura Japonesa · Cozinha Japonesa · Organização de Eventos · Atendimento ao Público"
  },
  {
    instituicao: "Colégio Estadual da Polícia Militar de Goiás - Unidade Hugo De Carvalho Ramos",
    logo: logoCpmGo,
    curso: "Diploma do Ensino Médio, Ensino Médio Completo",
    periodo: "jan de 2019 - dez de 2021",
    descricao: `🎓 Ensino Médio – Colégio da Polícia Militar Hugo de Carvalho Ramos (Goiânia, GO)\n\nDurante o Ensino Médio, vivenciei uma formação sólida e diferenciada, fundamentada em disciplina, rigor acadêmico e valores cívicos. Desenvolvi competências importantes, tais como:\n\n📘 Excelência Acadêmica & Rigor\n- Aprofundei conhecimentos em disciplinas como Matemática, Física, Química, Biologia, Português, História, Geografia e Inglês/Espanhol.\n\n🛡️ Disciplina & Valores Cívicos\n- O modelo militar promoveu valores como hierarquia, respeito, responsabilidade e trabalho em equipe.\n- Pratiquei a pontualidade, organização pessoal e compromisso com normas coletivas — aspectos valorizados em ambientes profissionais.\n\n🏫 Estrutura & Recursos Tecnológicos\n- Tive acesso a laboratórios de Informática e Ciências, biblioteca, auditório, quadras esportivas e ambientes climatizados.\n\n🤝 Esportes & Socialização\n- Atividades em grupo e eventos escolares promoveram integração e habilidades de relacionamento interpessoal.`,
    competencias: "Idiomas · ilustrador · Treinamento militar"
  },
  {
    instituicao: "Senac Brasil",
    logo: logoSenac,
    curso: "Diploma, Letras - Língua Inglesa e Literaturas de Língua Inglesa",
    periodo: "jan de 2019 - dez de 2020",
    descricao: `📘 Proficiência em Língua Inglesa\n\nAprofundei conhecimentos gramaticais, fonéticos e linguísticos aplicados à comunicação oral e escrita. Estudei obras literárias em inglês, ampliando minha visão crítica e cultural.\n\n📚 Didática e Ensino de ESL: Desenvolvi metodologias para ensino de inglês como segunda língua, com práticas voltadas a diferentes níveis de proficiência, focando em fluência e compreensão intercultural.\n\n🎨 Expressão Visual: Explorei técnicas de ilustração para uso educacional e criativo, utilizando softwares de edição e criação visual como apoio ao ensino.\n\n🤝 Comunicação: Trabalhos em grupo e projetos integradores promoveram o desenvolvimento de habilidades colaborativas e comunicativas.`,
    competencias: "Idiomas · ilustrador · ESL (Inglês como segunda língua)"
  },
  {
    instituicao: "Basileu França",
    logo: logoBasileu,
    curso: "Certificado, Artes Públicas",
    periodo: "jan de 2011 - dez de 2017",
    descricao: "Atividades e grupos: Ex; Teatro, Coral, Artesanato, Artes Plásticas, Desenho Realista, Artes Cênicas, Circo, Teatro Musical, Dança e Pinturas.",
    competencias: "ilustrador"
  }
];

const formacoesEN = [
  { instituicao: "SENAI Fatesg College", curso: "Bachelor's degree in Software Engineering", periodo: "Jan 2022 - Dec 2025", descricao: "🎓 Undergraduate in Software Engineering\n\nTraining focused on robust, scalable technology solutions aligned with business needs. Solid foundation in systems engineering, software architecture, data, AI and management.\n\n💡 Development: Data Structures, Algorithms, Requirements Engineering, Testing, Software Quality, Software Design, HCI and System Maintenance\n\n🖥️ Architecture: Operating Systems, Networks, Cloud Computing, Distributed Systems, Software Governance and Information Security\n\n📊 Data & AI: Relational and NoSQL Databases, Data Mining, Big Data, ETL, Artificial Intelligence, Neural Networks and Algorithm Analysis\n\n📈 Management: Project Management, IT Governance, Economic Engineering, Ethics and IT Legislation, Sustainability and Green IT", competencias: "🎯 User Interface Design (UI) · 🧠 User Experience (UX) · 💻 Programming · 🌐 Front-end Development · 🔄 Full Stack Development · 🗄️ PostgreSQL · 📊 PL/SQL · ☕ Java · 🟨 JavaScript · 🔷 TypeScript · ⚛️ React.js · 🅰️ AngularJS · 🎨 Figma · 🖌️ Illustrator · 🖥️ CMD · 🛠️ Network Administration · 📡 Information Technology" },
  { instituicao: "Faculdade Sensu", curso: "Bachelor's degree, Public Security", periodo: "Jun 2024 - Jun 2025", descricao: "🎓 Public Security degree | Faculdade Sensu\n\nOngoing training in Public Security with a multidisciplinary approach to analysis, prevention and strategic management of security in the contemporary social context.\n\nMain areas of study:\n\n📊 Criminal Analysis and Applied Intelligence and Counterintelligence\n\n🔍 Criminology, Violence Prevention and Public Security Diagnosis\n\n⚖️ Human Rights, Specific Legislation and Penal Execution\n\n🧠 Psychology, Ethics, Philosophy in Relations and State Theory\n\n🛠️ Strategic Planning, Policing Models and Institutional Management\n\n💻 Digital Technologies Applied to Public Security\n\n👥 Care for Vulnerable Groups, Negotiation and First Aid\n\n💡 Continuously developing critical, ethical and technical skills for professional practice focused on protecting society.", competencias: "Criminal Analysis · Strategic Management in Public Security · Human Rights and Police Practices · Criminology · Mediation and Negotiation Techniques" },
  { instituicao: "KAIKAN - ANBG - Associação Nipo Brasileira de Goiás", curso: "Japanese Language Course", periodo: "Jan 2021 - Dec 2024", descricao: "🇯🇵 Japanese Language Course | KAIKAN - ANBG\n\nJapanese language training at the Brazilian-Japanese Association of Goiás, developing communicative and cultural skills for effective interaction in Japanese contexts.\n\n📚 Content: Japanese grammar, writing systems (Hiragana, Katakana, Kanji), conversation, listening, reading and writing\n\n🎌 Culture: Studies on traditions, customs and values of Japanese culture, facilitating intercultural understanding\n\n💬 Communication: Developing skills for oral and written communication in different formal and informal contexts", competencias: "Languages · Japanese · Hiragana · Katakana · Kanji · Intercultural Communication · Japanese Culture · Japanese Cuisine · Event Organization · Customer Service" },
  { instituicao: "Goiás State Military Police College - Hugo De Carvalho Ramos Unit", curso: "High School Diploma, Complete Secondary Education", periodo: "Jan 2019 - Dec 2021", descricao: "🎓 High School – Military Police College Hugo de Carvalho Ramos (Goiânia, GO)\n\nDuring high school, I had a solid and distinctive education based on discipline, academic rigor and civic values. I developed important skills such as:\n\n📘 Academic Excellence & Rigor\n- Deepened knowledge in Mathematics, Physics, Chemistry, Biology, Portuguese, History, Geography and English/Spanish.\n\n🛡️ Discipline & Civic Values\n- The military model promoted values such as hierarchy, respect, responsibility and teamwork.\n- I practiced punctuality, personal organization and commitment to collective norms — aspects valued in professional environments.\n\n🏫 Structure & Technological Resources\n- I had access to IT and Science labs, library, auditorium, sports courts and climate-controlled spaces.\n\n🤝 Sports & Socialization\n- Group activities and school events promoted integration and interpersonal skills.", competencias: "Languages · Illustrator · Military training" },
  { instituicao: "Senac Brasil", curso: "Diploma, Letters - English Language and Literatures", periodo: "Jan 2019 - Dec 2020", descricao: "📘 English Language Proficiency\n\nI deepened grammatical, phonetic and linguistic knowledge applied to oral and written communication. I studied literary works in English, broadening my critical and cultural perspective.\n\n📚 ESL Teaching: I developed methodologies for teaching English as a second language, with practices for different proficiency levels, focusing on fluency and intercultural understanding.\n\n🎨 Visual Expression: I explored illustration techniques for educational and creative use, using editing and visual creation software to support teaching.\n\n🤝 Communication: Group work and integrative projects promoted the development of collaborative and communication skills.", competencias: "Languages · Illustrator · ESL (English as a second language)" },
  { instituicao: "Basileu França", curso: "Certificate, Public Arts", periodo: "Jan 2011 - Dec 2017", descricao: "Activities and groups: e.g. Theater, Choir, Crafts, Plastic Arts, Realistic Drawing, Performing Arts, Circus, Musical Theater, Dance and Painting.", competencias: "Illustrator" },
];

const FormacaoAcademica = ({ locale = 'pt-BR' }) => {
  const isEn = locale === 'en';
  const formacoesList = isEn ? formacoesEN.map((f, i) => ({ ...f, logo: formacoes[i].logo })) : formacoes;
  const [formacaoSelecionada, setFormacaoSelecionada] = useState(null);

  // Fechar modal com tecla ESC
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && formacaoSelecionada) {
        setFormacaoSelecionada(null);
      }
    };

    if (formacaoSelecionada) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [formacaoSelecionada]);

  return (
    <div className="formacao-academica">
      <div className="container-experiencias">
        {formacoesList.map((form, idx) => (
          <div
            className="experiencia-item experiencia-clickable"
            key={idx}
            onClick={() => setFormacaoSelecionada(form)}
            style={{ cursor: 'pointer', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.2rem', display: 'flex' }}
          >
            <img src={form.logo} alt={form.instituicao} style={{ width: '70px', height: '70px', objectFit: 'contain', borderRadius: '12px', background: '#fff', padding: '0.3rem', marginBottom: '0.7rem' }} />
            <h3 style={{ margin: 0, color: '#64ffda' }}>{form.instituicao}</h3>
            <span className="experiencia-periodo">{form.periodo}</span>
            <div style={{ color: '#bdbdbd', fontSize: '1rem', marginBottom: '0.5rem' }}>{form.curso}</div>
          </div>
        ))}
      </div>

      {/* Modal de Detalhes da Formação */}
      {formacaoSelecionada && (
        <div className="modal-experiencia-overlay" onClick={() => setFormacaoSelecionada(null)}>
          <div className="modal-experiencia" onClick={(e) => e.stopPropagation()} style={{
            maxHeight: '90vh',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <button className="fechar-modal" onClick={() => setFormacaoSelecionada(null)}>&times;</button>
            
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
                src={formacaoSelecionada.logo} 
                alt={formacaoSelecionada.instituicao} 
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
                {formacaoSelecionada.instituicao}
              </h2>
              <span className="experiencia-periodo" style={{ 
                fontSize: '1.1rem',
                fontWeight: '500' 
              }}>
                {formacaoSelecionada.periodo}
              </span>
              <div style={{ 
                color: '#e0e0e0', 
                fontSize: '1.2rem', 
                fontWeight: '500',
                textAlign: 'center'
              }}>
                {formacaoSelecionada.curso}
              </div>
            </div>
            
            {/* Conteúdo do Modal */}
            <div className="modal-conteudo-scroll" style={{
              flex: '1',
              overflowY: 'auto',
              paddingRight: '0.5rem',
              minHeight: 0
            }}>
              {/* Descrição */}
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
                  {isEn ? 'About this program' : 'Sobre a Formação'}
                </h3>
                <div style={{ 
                  whiteSpace: 'pre-line', 
                  color: '#fff', 
                  fontSize: '1rem', 
                  lineHeight: '1.7',
                  textAlign: 'left'
                }}>
                  {formacaoSelecionada.descricao}
                </div>
              </div>
              
              {/* Competências */}
              {formacaoSelecionada.competencias && (
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
                    {isEn ? 'Skills developed' : 'Competências Desenvolvidas'}
                  </h3>
                  <div style={{ 
                    color: '#e0e0e0', 
                    fontSize: '1rem',
                    lineHeight: '1.8',
                    textAlign: 'left',
                    padding: '1.5rem',
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    borderRadius: '10px',
                    border: '1px solid rgba(100, 255, 218, 0.2)',
                    wordWrap: 'break-word',
                    whiteSpace: 'normal'
                  }}>
                    {formacaoSelecionada.competencias}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormacaoAcademica; 