import { Alert } from "react-bootstrap";
import FormCadUsuario from "./formularios/FormCadUsuario";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaCadUsuario from "./tabelas/TabelaUsuarios"

export default function TelaCadastroUsuario(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [usuarioSelecionado, setUsuarioSelecionado] = useState({
        id: 0,
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
                        <TabelaCadUsuario setExibirTabela={setExibirTabela}
                                        setModoEdicao={setModoEdicao}
                                        setUsuarioSelecionado={setUsuarioSelecionado} /> :
                        <FormCadUsuario setExibirTabela={setExibirTabela}
                                         usuarioSelecionado={usuarioSelecionado}
                                         setUsuarioSelecionado={setUsuarioSelecionado}
                                         modoEdicao={modoEdicao}
                                         setModoEdicao={setModoEdicao}/>
                }
            </Pagina>
        </div>
    );

}