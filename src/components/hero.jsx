import { Link } from "react-router-dom"

//Componente da page Home
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-intro">Olá! Eu sou</p>

        <h1 className="hero-title typing">
          Ana Clara Souza Bizarria <br />
        </h1>

        <p className="hero-subtitle">
          Estudante de Sistemas de Informação <br />
        </p>

        <div className="hero-links">
          <Link to="/sobre">→ sobre mim</Link>
          <Link to="/portfolio">→ meus projetos</Link>
          <Link to="/contato">→ contato</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero