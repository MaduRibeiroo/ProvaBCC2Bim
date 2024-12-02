import { Alert } from "react-bootstrap";
import FormCadMensagem from "./formularios/FormCadMensagem";
import Pagina from "../layouts/Pagina";
import { useState } from "react";
import TabelaMensagem from "./tabelas/TabelaMensagem";

export default function TelaCadastroMensagem(props) {
    const [exibirTabela, setExibirTabela] = useState(true);
    const [modoEdicao, setModoEdicao] = useState(false);
    const [mensagemSelecionado, setMensagemSelecionado] = useState({
        info: "",
        hora: ""
    });

    return (
        <div>
            <Pagina>
                |<Alert className="mt-02 mb-02 success text-center" variant="success">
                    <h2>
                        Enviar mensagem
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                        <TabelaMensagem setExibirTabela={setExibirTabela}
                                        setModoEdicao={setModoEdicao}
                                        setMensagemSelecionado={setMensagemSelecionado} /> :
                        <FormCadMensagem setExibirTabela={setExibirTabela}
                                         mensagemSelecionado={mensagemSelecionado}
                                         setMensagemSelecionado={setMensagemSelecionado}
                                         modoEdicao={modoEdicao}
                                         setModoEdicao={setModoEdicao}/>
                }
            </Pagina>
        </div>
    );

}