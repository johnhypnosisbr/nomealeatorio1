import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CompFooter from "../Componentes/Footer";
import CompNavbar from "../Componentes/Navbar";
import Home from "../Componentes/pages/Home";
import Produto from "../Componentes/pages/Produto";


export function RouteApp() {
    return (
        <>
            <ToastContainer />
            <div>
                <CompNavbar />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/produto" element={<Produto />} />
                    </Routes>
                </BrowserRouter>
                <CompFooter />

            </div>
        </>
    );
};