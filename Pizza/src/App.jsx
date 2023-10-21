import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cardapio from "./pages/Cardapio";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Usuario from "./pages/Usuario";
import CadastrarPizza from "./pages/Cadastrar-Pizza";


function App() {
  return(
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/cardapio" element={ <Cardapio /> }/>
          <Route path="/cadastro" element= { <Cadastro /> }></Route>
          <Route path="/usuario" element= { <Usuario /> }></Route>
          <Route path="/cadastrar-pizza" element= { <CadastrarPizza /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

