import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CarrinhoContext } from './CarrinhoContext';


function CompNavbar() {
  const [name, setName] = useState('NOME')
  const [email, setEmail] = useState('EMAIL')
  const [token, setToken] = useState(null)
  const [numeroProdutosCarrinho, setNumeroProdutosCarrinho] = useState(0)

  const { listaProdutosCarrinho } = useContext(CarrinhoContext)
  useEffect(() => {
    setNumeroProdutosCarrinho(listaProdutosCarrinho.length)
  },[listaProdutosCarrinho])

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
    <Navbar bg="primary" data-bs-theme="dark" fixed="top" >
      <Container className="divNav">
        <Navbar.Brand href="/">Lojinha do John</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/produto">Produtos</Nav.Link>
        </Nav>
        {token ? (
          <>
            <p style={{ color: "white", marginRight: "10px" }}>
              {name} <br></br> {email}
            </p>
            <a href="/">
              <Badge
                style={{
                  position: "absolute",
                  marginLeft: "20px",
                  marginTop: "-8px",
                }}
                bg="success"
              >
                {numeroProdutosCarrinho}
              </Badge>
              <i className="fa fa-shopping-cart fa-2x"> </i>
            </a>
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