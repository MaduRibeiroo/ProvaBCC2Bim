import Menu from "./menu";
import Cabecalho from "./Cabecalho";
import { Container } from "react-bootstrap";

export default function Pagina(props) {
    return (
        <>
            <Container>
                <Cabecalho titulo="Bate Papo" />
                <Menu />
                {
                    props.children
                }
            </Container>
        </>

    );
}