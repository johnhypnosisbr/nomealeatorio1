import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function CompFooter() {
    return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <p className="justify-content-center">&copy; Todos os direitos reservados 2023</p></Navbar.Brand>
                </Container>
            </Navbar>
    );
}

export default CompFooter;