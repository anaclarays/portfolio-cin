import "../styles/home.css"
import "../styles/sobre.css"

//página de sobre, com informações sobre a trajetória acadêmica, habilidades técnicas e soft skills
function Sobre() {
  return (
    <div className="sobre">
    <div className="sobre-wrapper">
        <div className="hero-content sobre-content">
          <h1>Sobre mim</h1>
          <p>
            Como estudante de Sistemas de Informação, estou em constante busca por conhecimento e aprimoramento. Tenho profundo interesse em tecnologia e pesquisa científica na área de Engenharia de Software. Estou sempre disposta a aprender novas linguagens de programação, frameworks e ferramentas. Acredito que a tecnologia combinada a aplicação prática da ciência tem o poder de transformar vidas e sigo animada para contribuir com projetos inovadores que possam fazer a diferença no cotidiano de outras pessoas.
          </p>

          {/* trajetória acadêmica */}
          <h2>Trajetória Acadêmica</h2>

          <div className="timeline">
            <div className="timeline-item">
              <h3>Bacharelado em Sistemas de Informação - UFPE</h3>
              <span className="periodo">2025.2 - 2029.1</span>
              <p>
                Atualmente, atuo como membro do eixo de Gestão de Processos da Liga Acadêmica de Engenharia de Software (SEAL), 
                monitora da disciplina de Concepção de Artefatos Digitais e aluna extensionista do projeto EnvelheSer Digital.
              </p>
            </div>

            <div className="timeline-item">
              <h3>Técnico Integrado em Informática - IFPE</h3>
              <span className="periodo">2021 - 2024</span>
              <p>
                Atuei como estudante pesquisadora no grupo Observatório Elo, desenvolvendo um projeto de Iniciação Científica. 
                Também participei ativamente da organização de eventos acadêmicos, como a Semana Nacional de Ciência e Tecnologia (SNCT).
              </p>

              {/* habilidades técnicas */}
          <h2>Habilidades Técnicas</h2>

          <ul className="skills-list">
            <li>
              <strong>Lógica de Programação:</strong> Java (intermediário), Python (básico), JavaScript (básico), C++ (básico)
            </li>
            <li>
              <strong>Versionamento:</strong> Git e GitHub
            </li>
            <li>
              <strong>Ferramentas Organizacionais:</strong> Miro, Jira, Trello, Notion
            </li>
          </ul>

          {/* soft skills */}
          <h2>Soft Skills</h2>

          <ul className="softskills-list">
            <li>Organização</li>
            <li>Boa comunicação</li>
            <li>Trabalho em equipe</li>
            <li>Visão sistêmica</li>
            <li>Proatividade</li>
          </ul>

            </div>
          </div>
          <p>
          </p>
        </div>
        </div>
        </div>
  )
}

export default Sobre