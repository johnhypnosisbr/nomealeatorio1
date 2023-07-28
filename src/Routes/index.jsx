import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Componentes/pages/Home";
import Login from "../Componentes/pages/Login";
import Produto from "../Componentes/pages/Produto";
import BaseSistema from "./BaseSistema";
import { MinhasRotas } from "./MinhasRotas";


export function RouteApp() {
    return (

                <BrowserRouter>
                    <Routes>
                        <Route path="/system/" element={<BaseSistema componente={MinhasRotas}/>}/>
                        <Route path="/" element={<Login />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/produto" element={<Produto />} />
                    </Routes>
                </BrowserRouter>
    );
};