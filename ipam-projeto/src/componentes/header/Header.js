import React, {useEffect} from 'react'
import '../header/header.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEstados, fetchMunicipios, fetchMunicipio} from '../../redux/actions/productAction'

function Header(props) {
  const dispatch = useDispatch()

  const estados = useSelector((state) => state.estadosReducer.estados)
  const municipios = useSelector((state)=> state.municipiosReducer.municipios)
  const municipio = useSelector((state)=> state.municipioReducer.municipio)


  useEffect(() =>{
    dispatch(fetchEstados())
  },[])

  useEffect(() =>{
    dispatch(fetchMunicipios(props.estadoId))
    
  },[props.estadoId])


  useEffect(()=>{
    dispatch(fetchMunicipio(props.municipioId))
  
  },[props.municipioId])


  return (
    <header> 
      <div>
        <h1>Selecione o estado e o município</h1>
      </div>
      <div className="container-selects">
        
        <select onChange={props.handleId} >
          <option>--Selecione o estado--</option>
          {estados.map(estado => <option value={estado.id} key={estado.id}> {estado.nome} </option>  )}
        </select>
        <select onChange={props.handleMunicipioId}>
            <option>--Selecione o município--</option>
            {municipios.map(municipio => <option value={municipio.id} key={municipio.id}> {municipio.nome} </option>)}  
        </select>       
        <button onClick={props.handleShow} className="btn">Submit</button> 
      </div>
    </header>
  )
}

export default Header