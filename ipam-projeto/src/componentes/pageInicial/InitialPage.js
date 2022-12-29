import React from 'react'
import '../pageInicial/initialPage.css'
import mapaBrasil from '../../imagens/map do brasil-transparent02.png'

function InitialPage() {
  return (
    <div className='container'>
    
        <div className="container-front-page">     
            <h2>Estados e Municípios do Brasil</h2>              
            <img src={mapaBrasil} alt="imagem-mapa-do-Brasil"/>  
            <h3>Preencha todos os campos e Submit</h3>      
        </div>
    </div>
  )
}

export default InitialPage