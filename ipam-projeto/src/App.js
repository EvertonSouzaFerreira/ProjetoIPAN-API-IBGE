import Header from './componentes/header/Header';
import './App.css';
import MainContainer from './componentes/mainContainer/MainContainer';
import InitialPage from './componentes/pageInicial/InitialPage';
import Footer from './componentes/footer/Footer';
import { useState } from 'react';



function App() {

  const [show, setShow] = useState(false)
  const [municipioId, setMunicipioId] = useState('')
  const [estadoId, setEstadoId] = useState('')
 
  const handleId =(e)=>{
      setEstadoId(e.target.value);
      setShow(false)
    }

  const handleMunicipioId = (e) => {
    setMunicipioId(e.target.value)
    setShow(false)
  }

  const handleShow = () => {
    if(municipioId === '' ){
      alert('preencha as informacoes')
    }
    else {
      setShow(true)
    }
    
  }

  return (
    <>
      <Header handleShow={handleShow}
              municipioId={municipioId}
              estadoId={estadoId}
              handleId={handleId}
              handleMunicipioId={handleMunicipioId}
              
              />
        {show && municipioId? <MainContainer show={show}/>: <InitialPage/>}
      <Footer/>
    </>
    
  );
}

export default App;
