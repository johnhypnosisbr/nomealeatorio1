import React, { useEffect, useState } from 'react';
import { Button, Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../service/api';
import { useContext } from 'react';
import { CarrinhoContext } from './CarrinhoContext';


function CardListar() {
    const [produtos, setProdutos] = useState([]);
    const { adicionarCarrinho } = useContext(CarrinhoContext)

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

    function adicionarProduto(idProduto, nomeProduto, precoProduto, linkImagemProduto) {
        adicionarCarrinho({ idProduto, nomeProduto, precoProduto, linkImagemProduto })
    }

    return (
        <>
            <Row className="justify-content-md-center text-center">
            </Row>
            <Row>
                {produtos.map((produto, index) => {
                    return (
                        <Card className="m-20" style={{ margin: "auto", marginBottom: "5px", width: '12rem', height: "20rem" }} key={index}>
                            <Link to={`/product/${produto.slug}`}>
                                <img src={produto.image} className="card-img-top img" alt={produto.name} />
                            </Link>
                            <Card.Body className="d-flex flex-column justify-center align-middle">
                                <Card.Title style={{ fontSize: "14px", height: "20px", marginBottom: "15px" }}>{produto.title}</Card.Title>
                                <Card.Text>${produto.price}</Card.Text>
                                {produto.countInStock === 0 ? (
                                    <Button variant="light" disabled>
                                        Out of stock
                                    </Button>
                                ) : (
                                    <Button onClick={() => adicionarProduto(produto.id, produto.title, produto.price, produto.image)} style={{ fontSize: "12px" }}>
                                        Add to cart
                                    </Button>
                                )}
                            </Card.Body>
                        </Card>
                    )
                })}
            </Row>
        </>
    )
}

export default CardListar