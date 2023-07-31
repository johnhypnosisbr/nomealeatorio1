
import { ToastContainer } from 'react-toastify';
import './App.css';
import { RouteApp } from './Routes';


function App() {
  return (
    <div className="bigOne">
      <ToastContainer />
      <RouteApp />;
    </div>
  )
}

export default App;
