import React from 'react'
import '../mainContainer/mainContainer.css'
import { useSelector } from 'react-redux'

function MainContainer(props) {
    const municipio = useSelector((state)=> state.municipioReducer.municipio)

  return (
    <div className='container'>
      {props.show &&  municipio.map((munic) =>{
        return (    
          <div key={munic.id} className='container-card'>
              <div className='title-estado'>
                  {munic.nome}
              </div>
              <div className='card-content'>
                  <p>Municipio: {munic.nome}</p>
                  <p>Microrregiao: {munic.municipio.microrregiao.nome}</p>
                  <p>Mesorregiao: {munic.municipio.microrregiao.mesorregiao.nome}</p>
                  <p>UF: {munic.municipio.microrregiao.mesorregiao.UF.nome}</p>
                  <p>Regiao: {munic.municipio.microrregiao.mesorregiao.UF.regiao.nome}</p>
              </div>
              <div className='card-footer'/>
          </div>
        )
        })}
      
    </div>
  )
}

export default MainContainer