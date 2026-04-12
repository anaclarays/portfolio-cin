import { Link } from "react-router-dom"

//barra de navegação, presente em todas as páginas
function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link> 
      <Link to="/sobre">Sobre</Link> 
      <Link to="/portfolio">Portfólio</Link> 
      <Link to="/contato">Contato</Link>
    </nav>
  )
}

export default Navbar