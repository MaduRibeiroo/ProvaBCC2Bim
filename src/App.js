import TelaCadastroUsuario from "./componentes/telas/TelaCadastroUsuario";
import TelaMenu from "./componentes/telas/TelaMenu";
import Tela404 from "./componentes/telas/Tela404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaLogin from "./componentes/telas/TelaLogin";
import { useState, createContext } from 'react';
import store from "./redux/Store";
import { Provider } from "react-redux";

export const ContextoUsuario = createContext();

function App() {

  const [usuario, setUsuario] = useState({
    "usuario": "",
    "logado": false
  });

  if (!usuario.logado) {
    return (
      <ContextoUsuario.Provider value={{ usuario, setUsuario }}>
        <TelaLogin />
      </ContextoUsuario.Provider>
    );
  }
  else {
    return (
      <div className="App">
        <Provider store={store}>
          <ContextoUsuario.Provider value={{ usuario, setUsuario }}>
            <BrowserRouter>
              { //A ordem das rotas é importante 
              }
              <Routes>
                <Route path="/usuario" element={<TelaCadastroUsuario />} />
                <Route path="/mensagem" element={<TelaMensagem />} />
                <Route path="/" element={<TelaMenu />} />
                <Route path="*" element={<Tela404 />} />
              </Routes>
            </BrowserRouter>
          </ContextoUsuario.Provider>
        </Provider>
      </div >
    );
  }
}

export default App;
