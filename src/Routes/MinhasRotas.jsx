import { Route, Routes } from "react-router-dom";
import Home from "../Componentes/pages/Home";
import Produto from "../Componentes/pages/Produto";
import { Carrinho } from "../Componentes/pages/Carrinho";


export function MinhasRotas() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
    );
};