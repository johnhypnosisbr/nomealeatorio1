import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CompNavbar() {
  const [name, setName] = useState('NOME')
  const [email, setEmail] = useState('EMAIL')
  const [token, setToken] = useState(null)

  function pegarNomeEmailDoLocalStorage() {
    const emailLocalStorage = localStorage.getItem("emailLoggedUser")
    const nameLocalStorage = localStorage.getItem("nameLoggedUser")
    const tokenLocalStorage = localStorage.getItem("token")

    setEmail(emailLocalStorage)
    setName(nameLocalStorage)
    setToken(tokenLocalStorage)
  }

  function LimparLocalStorageParaDeslogar() {
    localStorage.removeItem("emailLoggedUser")
    localStorage.removeItem("nameLoggedUser")
    localStorage.removeItem("token")
    pegarNomeEmailDoLocalStorage()
  }

  useEffect(() => {
    pegarNomeEmailDoLocalStorage()
  }, [])

  return (
    <Navbar bg="primary" data-bs-theme="dark" >
      <Container className="divNav">
        <Navbar.Brand href="/">Lojinha do John</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/produto">Produtos</Nav.Link>
        </Nav>
        {token ? (
          <>
            <p style={{ color: "white", marginRight: "10px" }}>
              {name} <br></br> {email}
            </p>
            <button className="deslogarBtn" onClick={LimparLocalStorageParaDeslogar}>Deslogar</button>
          </>
        ) : (
          <a href="/login">Login</a>
        )
        }
      </Container>
    </Navbar >


  )
}


export default CompNavbar;