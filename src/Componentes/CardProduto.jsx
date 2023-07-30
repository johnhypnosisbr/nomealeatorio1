import { useState } from "react";
import { Button, Card } from "react-bootstrap";


export function CardProduto({ nome, preco, descricao, image }) {

    return (
        <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>
                            {nome}
                        </Card.Title>
                        <Card.Text>
                            R$: {preco}
                            <br />
                            {descricao}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}