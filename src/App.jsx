import { HashRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Sobre from "./pages/sobre"
import Portfolio from "./pages/portfolio"
import Contato from "./pages/contato"
import Navbar from "./components/navbar"

//essa página trata das rotas do site, definindo quais são renderizados para cada caminho
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </HashRouter>
  )
}

export default App