import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cardapio from "./pages/Cardapio";
import Home from "./pages/Home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Usuario from "./pages/Usuario";
import CadastrarPizza from "./pages/Cadastrar-Pizza";

function App() {
  return(
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/cardapio" element={ <Cardapio /> }/>
            <Route path="/cadastro" element= { <Cadastro /> }></Route>
            <Route path="/login" element= { <Login /> }></Route>
            <Route path="/usuario" element= { <Usuario /> }></Route>
            <Route path="/cadastrar-pizza" element= { <CadastrarPizza /> }></Route>
          </Routes>
        </BrowserRouter>  
      </>
  )
}

export default App

