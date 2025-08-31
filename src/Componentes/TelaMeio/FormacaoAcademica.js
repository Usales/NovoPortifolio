import React, { useState } from 'react';
import './TelaMeio.css';
import logoSenaiFatesg from '../Imagens/faculdade_senai_fatesg_logo.jpeg';
import logoSensu from '../Imagens/faculdadesensu_logo.jpeg';
import logoCpmGo from '../Imagens/LOGO-CEPMG.png';
import logoSenac from '../Imagens/senacbrasil_logo.jpeg';
import logoBasileu from '../Imagens/logo_basileu.png';

const formacoes = [
  {
    instituicao: "Faculdade SENAI Fatesg",
    logo: logoSenaiFatesg,
    curso: "Bacharelado em Engenharia de Software",
    periodo: "jan de 2022 - dez de 2025",
    descricao: `🎓 Graduando em Engenharia de Software\n\nAo longo da minha formação em Engenharia de Software, desenvolvi competências técnicas e práticas em diversas áreas da computação e da engenharia de sistemas. Minha trajetória acadêmica me proporcionou uma base sólida em:\n\n💡 Desenvolvimento de Software\n- Estrutura de Dados, Algoritmos e Programação\n- Engenharia de Requisitos e Processos de Software\n- Testes, Qualidade e Gerência de Configuração\n- Design de Software e Interação Humano-Computador\n\n🖥️ Tecnologias e Arquitetura de Sistemas\n- Sistemas Operacionais, Redes de Computadores e Computação em Nuvem\n- Arquitetura de Computadores e Sistemas Microcontrolados\n- Construção de Software e Sistemas Distribuídos\n\n📊 Dados e Inteligência Artificial\n- Banco de Dados, Mineração de Dados e Big Data\n- Inteligência Artificial e Análise de Algoritmos\n- Computação Gráfica e Linguagens Formais\n\n📈 Gestão, Ética e Inovação\n- Gerência de Projetos de Software e Governança de TI`,
    competencias: "Design de interface do usuário · Programação · Figma (Software) · ilustrador · CMD · Experiência do usuário (UX) · Desenvolvimento de front-end · Atuação em conhecimentos de informática · Administração de redes · Tecnologia da informação · Desenvolvimento FullStack · PostgreSQL · PL/SQL · Java · JavaScript · TypeScript · React.js · AngularJS"
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
    descricao: `📘 Proficiência em Língua Inglesa

Aprofundei conhecimentos gramaticais, fonéticos e linguísticos aplicados à comunicação oral e escrita.

Estudei obras literárias em inglês, ampliando minha visão crítica e cultural.

📚 Didática e Ensino de ESL (English as a Second Language)

Desenvolvi metodologias para ensino de inglês como segunda língua.

Realizei práticas voltadas ao ensino em diferentes níveis de proficiência, com foco na fluência e compreensão intercultural.

🎨 Expressão Visual e Recursos Ilustrativos

Explorei técnicas de ilustração para uso educacional e criativo.

Utilizei softwares de edição e criação visual como apoio ao ensino e à comunicação.

🤝 Comunicação Interpessoal e Colaboração

Trabalhos em grupo e projetos integradores promoveram o desenvolvimento de habilidades colaborativas e comunicativas.`,
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

const FormacaoAcademica = () => {
  const [formacaoSelecionada, setFormacaoSelecionada] = useState(null);

  return (
    <div className="formacao-academica">
      <div className="container-experiencias">
        {formacoes.map((form, idx) => (
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
            <div style={{
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
                  Sobre a Formação
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
                    Competências Desenvolvidas
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