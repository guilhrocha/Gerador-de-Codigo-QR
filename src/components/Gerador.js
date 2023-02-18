import './Gerador.css';
import Qrcode from 'react-qr-code'
import {useState} from 'react'


function Gerador() {
  const [link, setLink] = useState('') 
  function mudarqrcode(e){
    setLink(e.target.value)
  }

  return (
    <div className='tudo'>
    <h1 className='paragrafo'>Gerador de qrcode automático com React.JS</h1>
    <div className='container'>
        <Qrcode value={link}/>
        <input className='inserir' placeholder="Digite ou insira seu link aqui..." value={link} onChange={ (e) => mudarqrcode(e)}/>
    </div>
    </div>
  );
}

export default Gerador;