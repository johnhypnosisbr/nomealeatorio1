import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Componentes/pages/Login";
import BaseSistema from "./BaseSistema";
import { MinhasRotas } from "./MinhasRotas";


export function RouteApp() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<BaseSistema componente={MinhasRotas} />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
};