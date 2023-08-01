import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../service/api';


function CardListar() {
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
                        <Card className="m-2" style={{ width: '18rem' }}>
                            <Link to={`/product/${produto.slug}`}>
                                <img src={produto.image} className="card-img-top img" alt={produto.name} />
                            </Link>
                            <Card.Body>
                                <Card.Title>{produto.title}</Card.Title>
                                <Card.Text>${produto.price}</Card.Text>
                                {produto.countInStock === 0 ? (
                                    <Button variant="light" disabled>
                                        Out of stock
                                    </Button>
                                ) : (
                                    <Button>
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