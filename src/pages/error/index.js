import './error.css'
import { Link } from 'react-router-dom'


function Error() {
  return (
    <div className="container-error">
      <img src="/404-page-not-found.png" alt="Pagina não encontrada" />
      <h1>Pagina não encontrada</h1>
      <Link to="/">
        Voltar para Home
      </Link>
    </div>
    
  )
}

export default Error;