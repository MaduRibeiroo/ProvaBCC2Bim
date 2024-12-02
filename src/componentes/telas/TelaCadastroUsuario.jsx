import { Alert } from "react-bootstrap";
import FormCadUsuario from "./formularios/FormCadUsuario";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaProdutos from "./Tabelas/TabelaProdutos";

export default function TelaCadastroUsuario(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        nickname:"",
        urlImagem:"",
        senha:"",
    });

    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Cadastro do Usuario
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaProdutos setExibirTabela={setExibirTabela}
                                        setModoEdicao={setModoEdicao}
                                        setUsuarioSelecionado={setUsuarioSelecionado} /> :
                        <FormCadProdutos setExibirTabela={setExibirTabela}
                                         usuarioSelecionado={usuarioSelecionado}
                                         setUsuarioSelecionado={setUsuarioSelecionado}
                                         modoEdicao={modoEdicao}
                                         setModoEdicao={setModoEdicao}/>
                }
            </Pagina>
        </div>
    );

}