import './header.css'
import { Link } from 'react-router-dom'

export default function Header () {
    return (
      <header>
        <Link className="link-item" to="/" >Home</Link>
        <Link className="link-item" to="/favoritos" >Salvos</Link>
      </header>
    )
  }