import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import api from '../service/api';
import { CardProduto } from './CardProduto';
import { toast } from 'react-toastify';


function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    try {
      const response = await api.get("/productlistbyremark/home");
      setProdutos(response.data);
    } catch (err) {
      console.log(err)
      mensagemDeErro("DEU RUIM BUSCANDO PRODUTOS")
    }
  }

  function mensagemDeErro(mensagem = "DEU RUIM") {
    toast.warn(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <>
      <Row className="justify-content-md-center">
        <Col md={2}>
          <h1>Hortifruti</h1>
        </Col>
      </Row>
      <Row>
        {produtos.map((produto, index) => {
          return (
            <Col className="m-2" key={produto.id}> 
              <CardProduto 
              nome={produto.title}
              preco={produto.price}
              image={produto.image}
              descricao={produto.category} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default ListarProdutos