import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home"
import Sobre from "./pages/sobre"
import Servicos from "./pages/servico"
import Projetos from "./pages/projetos"
import Contato from "./pages/contato"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  )
}
