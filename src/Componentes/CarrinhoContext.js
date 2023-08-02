import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const CarrinhoContext = createContext();

function CarrinhoContextProvider({ children }) {
    const [listaProdutosCarrinho, setListaProdutosCarrinho] = useState([]);

    useEffect(() => {
        buscarProdutosLocaStorage();
    }, []);
    function buscarProdutosLocaStorage() {
        const produtosLocalStorage = localStorage.getItem("carrinho_produtos");

        if (produtosLocalStorage) {
            const produtosProdutos = JSON.parse(produtosLocalStorage);
            setListaProdutosCarrinho(produtosProdutos);
        }
    }

    function salvarProdutos(lista) {
        //ATUALIZAR LISTA DE PRODUTOS NO CONTEXTO E SALVAR NO LOCAL
        setListaProdutosCarrinho(lista);
        const listaDeProdutos = JSON.stringify(lista);
        localStorage.setItem("carrinho_produtos", listaDeProdutos);
    }

    const adicionarCarrinho = async (produto) => {
        const qtdProdutosNoCarrinho = listaProdutosCarrinho.filter(
            (item) => item.idProduto == produto.idProduto
        );
        if (qtdProdutosNoCarrinho.length > 0) {
            return toast.error("Produto já esta no seu carrinho", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

        const listaProdutosAtualizado = [produto, ...listaProdutosCarrinho];
        salvarProdutos(listaProdutosAtualizado);
    };
    function removerProduto(idProduto) {
        const listaProdutosAtualizado = listaProdutosCarrinho.filter(
            (item) => item.idProduto != idProduto
        );

        salvarProdutos(listaProdutosAtualizado);
    }

    return (
        <CarrinhoContext.Provider
            value={{ listaProdutosCarrinho, adicionarCarrinho, removerProduto }}
        >
            {children}
        </CarrinhoContext.Provider>
    );
}

export default CarrinhoContextProvider;

// https://pt.aliexpress.com/item/1005003506303251.html?spm=a2g0o.productlist.main.9.1fed68d3AH1Rq7&algo_pvid=ef6fa112-a1d2-432f-ac30-ed74727396c7&aem_p4p_detail=202308011826474144282249070640017932108&algo_exp_id=ef6fa112-a1d2-432f-ac30-ed74727396c7-4&pdp_npi=3%40dis%21BRL%2171.11%2112.45%21%21%2114.33%21%21%402101f49916909396073663243ec1e5%2112000033590916011%21sea%21BR%210&curPageLogUid=PoIOBBqpKbph&search_p4p_id=202308011826474144282249070640017932108_5