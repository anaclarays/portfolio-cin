import "../styles/portfolio.css"

//página de portfólio, com descrição dos projetos desenvolvidos e links para repositórios e protótipos
function Portfolio() {
  return (
    <div className="portfolio">
      <div className="portfolio-content">

        <h1>Portfólio</h1>

        {/* projeto 1 */}
        <h2>Alerta Campus</h2>
        <p><strong>Status:</strong> Finalizado</p>

        <p>
          O Alerta Campus é um aplicativo desenvolvido com o objetivo de aumentar a segurança da comunidade acadêmica da Universidade Federal de Pernambuco (UFPE), especialmente no período noturno, quando há maior sensação de insegurança em áreas pouco iluminadas ou com histórico de ocorrências. Este projeto foi desenvolvido como trabalho final da disciplina Concepção de Artefatos Digitais e apresentado na Feira de Impacto Social da mesma disciplina, com foco em soluções tecnológicas de impacto social em 2025.2.
        </p>

        <p>
          <strong>Links:</strong><br />
          <a href="https://github.com/anaclarays/alerta-campus" target="_blank">
            Repositório
          </a>
          <br />
          <a href="https://alerta-campus.lovable.app" target="_blank">
            Protótipo
          </a>
        </p>

          {/* projeto 2 */}
        <h2>Boletim de Produção Ambulatorial</h2>
        <p><strong>Status:</strong> Em andamento</p>

        <p>
          O sistema de Boletim de Produção Ambulatorial é fruto de um projeto de extensão, bem como foi desenvolvido como trabalho final da disciplina Desenvolvimento de Software. O objetivo é construir um sistema web para auxiliar os profissionais e estudantes da CEO – clínica escola do Hospital Odontológico (HO) da UFPE para automatizar, verificar e exportar a coleta e envio de dados para o Sistema Único de Saúde (SUS), melhorando a experiência dos profissionais e estudantes envolvidos e aumentando a eficiência administrativa.
        </p>

        <p>
          <strong>Link:</strong><br />
          <a href="https://preview--bpa-prototipo.lovable.app/" target="_blank">
            Protótipo
          </a>
        </p>

      </div>
    </div>
  )
}

export default Portfolio