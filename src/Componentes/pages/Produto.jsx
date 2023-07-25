import React from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ListarProdutos from '../ListarProdutos';

function Produto() {
  return (
    <Container>
      <ListarProdutos />
      <Button variant="success">
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
          RETORNAR
        </Link>
      </Button>
    </Container>


  )
}

export default Produto