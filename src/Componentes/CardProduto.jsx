import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { CarrinhoContext } from "./CarrinhoContext";

function CardProduto({idProduto, nome, preco, desricao, linkImagem}) {
    const { adicionarCarrinho } = useContext(CarrinhoContext);

    function adicionarNoCarrinho(
        idProduto, 
        nomeProduto,
        precoProduto,
        descricaoProduto,
        linkImagemProduto
    ) {
        adicionarCarrinho({
            idProduto,
            nomeProduto,
            descricaoProduto,
            precoProduto,
            linkImagemProduto
        })
    }
    return (
        <Card style
    )
}