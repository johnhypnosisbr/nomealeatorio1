
import { ToastContainer } from 'react-toastify';
import './App.css';
import { RouteApp } from './Routes';
import CarrinhoContextProvider from './Componentes/CarrinhoContext';
import "font-awesome/css/font-awesome.css"


function App() {
  return (
      <>
      <CarrinhoContextProvider>
      <ToastContainer />
      <RouteApp />
      </CarrinhoContextProvider>
      </>
  )
}

export default App;
