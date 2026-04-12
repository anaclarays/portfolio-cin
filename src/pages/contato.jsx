import "../styles/contato.css"

//página de contato, com informações de contato e links para redes sociais
function Contato() {
  return (
    <div className="contato">
      <div className="contato-content">

        <h2>Contato</h2>

        <p className="contato-info">
          +55 87 9 8147-5616 <br />
          acsb2@cin.ufpe.br
        </p>

        <h2>Sociais</h2>

        <p className="contato-links">
          <a href="https://github.com/anaclarays" target="_blank">
            GitHub
          </a>
          {" | "}
          <a href="https://www.linkedin.com/in/anaclarabizarria" target="_blank">
            LinkedIn
          </a>
          {" | "}
          <a href="http://lattes.cnpq.br/1950946818717842" target="_blank">
            Currículo Lattes
          </a>
        </p>

      </div>
    </div>
  )
}

export default Contato