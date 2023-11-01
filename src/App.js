//Importações
import Routes from './routes'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import './App.css'

export default function App () {
  return (
    <div className="app">
      <Routes />
      <ToastContainer autoclose={500} />
    </div>
  );
}