import { useState } from 'react'
import {FiLink} from 'react-icons/fi'
import './home.css';
import Menu from '../../componentes/menu'
import LinkItem from '../../componentes/LinkItem';
import api from '../../services/api'
import { saveLink } from '../../services/storeLinks';

function Home() {
  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});


  async function handleShortLink() {
    try{
      const response = await api.post('/shorten', {
        long_url: link
      })

      setData(response.data);
      setShowModal(true);

      saveLink('@encurtaLink',response.data);

      setLink('');
    } catch {
      alert("Ops parece que algo deu errado")
      setLink('');
    }
  }


  return (
    <div className="container-home">

      <div className="logo">
        <img src="/link150.png" alt="Sujeito Link Logo" />
        <h1>SujeitoLink</h1>
        <span>Cole seu link para encurtar👇</span>
      </div>


      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF"/>
          <input value={link} onChange={ (e) => setLink(e.target.value) } type="text" placeholder='Cole seu link aqui...'/>
        </div>
        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>

      <Menu/>

      { showModal && (
        <LinkItem 
          closeModal={() => setShowModal(false)}
          content={ data }
        />
      ) }

    </div>
  );
}

export default Home;
