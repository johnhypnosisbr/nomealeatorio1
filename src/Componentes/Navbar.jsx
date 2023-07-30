import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CompNavbar() {
  const [name, setName] = useState('NOME')
  const [email, setEmail] = useState('EMAIL')

  function pegarNomeEmailDoLocalStorage() {
    const emailLocalStorage = localStorage.getItem("emailLoggedUser")
    const nameLocalStorage = localStorage.getItem("nameLoggedUser")

    setEmail(emailLocalStorage)
    setName(nameLocalStorage)
  }

  useEffect(() => {
    pegarNomeEmailDoLocalStorage()
  }, [])

  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Lojinha do John</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/produto">Produtos</Nav.Link>
          <p>
            Sua conta: {name} | {email}
          </p>
        </Nav>
      </Container>
    </Navbar>
  )
}


export default CompNavbar;