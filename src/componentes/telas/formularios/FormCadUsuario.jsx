import { Button, Spinner, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { gravarUsuario } from '../../../servicos/ServicoUsuario';

import toast, {Toaster} from 'react-hot-toast';

export default function FormCadUsuario(props) {
    const [usuario, setUsuario] = useState(props.usuarioSelecionado);
    const [formValidado, setFormValidado] = useState(false);
    /*const [categorias, setCategorias] = useState([]);
    const [temCategorias, setTemCategorias] = useState(false);

    useEffect(()=>{
        consultarCategoria().then((resultado)=>{
            if (Array.isArray(resultado)){
                setCategorias(resultado);
                setTemCategorias(true);
            }
            else{
                toast.error("Não foi possível carregar as categorias");
            }
        }).catch((erro)=>{
            setTemCategorias(false);
            toast.error("Não foi possível carregar as categorias");
        });
        
    },[]); //didMount

    function selecionarCategoria(evento){
        setProduto({...produto, 
                       categoria:{
                        codigo: evento.currentTarget.value

                       }});
    }*/

    function manipularSubmissao(evento) {
        const form = evento.currentTarget;
        if (form.checkValidity()) {

            if (!props.modoEdicao) {
                gravarUsuario(produto)
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
                props.setListaDeUsuarios(props.listaDeUsuarios.map((aux) => {
                    if (aux.id !== usuario.id)
                        return aux
                    else
                        return usuario
                }));
                props.setModoEdicao(false);
                props.setUsuarioSelecionado({
                    id: 0,
                    nickname: "",
                    urlImagem: "",
                    senha: ""
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
        setUsuario({ ...usuario, [elemento]: valor });
    }

    return (
        <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>ID:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="id"
                        name="id"
                        value={usuario.id}
                        disabled={props.modoEdicao}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o id!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Nickname</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="nickname"
                        name="nickname"
                        value={usuario.nickname}
                        disabled={props.modoEdicao}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type='invalid'>Por favor, informe o seu nickname!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="12">
                    <Form.Label>Imagem:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="url"
                        name="url"
                        value={usuario.url}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a url da foto!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row className="mb-4">
                <Form.Group as={Col} md="4">
                    <Form.Label>Senha:</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        id="senha"
                        name="senha"
                        value={usuario.senha}
                        onChange={manipularMudanca}
                    />
                    <Form.Control.Feedback type="invalid">Por favor, informe a senha!</Form.Control.Feedback>
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