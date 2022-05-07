import './menu.css'
import { BsYoutube, BsInstagram} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div className="menu">
      <a target="_blank" className='social' href="https://youtube.com">
        <BsYoutube color='#FFF' size={24} />
      </a>

      <a target='_blank' className='social' href="https://www.instagram.com/helder_cavalcantef/">
        <BsInstagram color='#FFF' size={24} />
      </a>
      <Link className="menu-item" to="/links">
        Meus Links
      </Link>
    
    </div>
  )
}

export default Menu;