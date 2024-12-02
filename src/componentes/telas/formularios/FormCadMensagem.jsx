import { Button, Spinner, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useState } from 'react';
import { gravarMensagem} from "../../../servicos/servicoMensagem";

import toast, {Toaster} from 'react-hot-toast';

export default function FormCadMensagem(props) {
    const [mensagem, setMensagem] = useState(props.mensagemSelecionado);
    const [formValidado, setFormValidado] = useState(false);

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {

            if (!props.modoEdicao) {
                gravarMensagem(mensagem)
                .then((resultado)=>{
                    if (resultado.status){
                        props.setExibirTabela(true);
                    }
                    else{
                        toast.error(resultado.mensagem);
                    }
                });
            }
            else {
                props.setListaDeMensagens(props.listaDeMensagens.map((aux) => {
                    if (aux.data !== mensagem.data)
                        return aux
                    else
                        return mensagem
                }));
                props.setModoEdicao(false);
                props.setMensagemSelecionado({
                    info: "",
                    data: ""
                });
                props.setExibirTabela(true);
            }

        }
        else {
            setFormValidado(true);
        }
        evento.preventDefault();
        evento.stopPropagation();

    }

    function manipularMudanca(evento) {
        const elemento = evento.target.name;
        const valor = evento.target.value;
        setMensagem({ ...mensagem, [elemento]: valor });
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Mensagem:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="info"
                        name="info"
                        value={mensagem.info}
                        disabled={props.modoEdicao}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe a mensagem!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Hora</Form.Label>
                    <Form.Control
                        required
                        type="time"
                        id="hora"
                        name="hora"
                        value={mensagem.hora}
                        disabled={props.modoEdicao}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe a hora!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            
            <Row className='mt-2 mb-2'>
                <Col md={1}>
                <Button type="submit">{props.modoEdicao ? "Alterar" : "Confirmar"}</Button>
                </Col>
                <Col md={{ offset: 1 }}>
                    <Button onClick={() => {
                        props.setExibirTabela(true);
                    }}>Voltar</Button>
                </Col>
            </Row>
            <Toaster position="top-right"/>
        </Form>
        
    );
}