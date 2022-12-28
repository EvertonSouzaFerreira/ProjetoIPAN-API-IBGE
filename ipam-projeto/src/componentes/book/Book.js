import React, { useEffect, useState } from 'react'
// import '../book/book.css'
import mapaBrasil from '../../imagens/map do brasil-transparent02.png'
import mapaMS from '../../imagens/estado do mato grosso do sul.png'
import { useSelector } from 'react-redux'

function Book(props) {
 
    const municipio = useSelector((state)=> state.municipioReducer.municipio)
    const estados = useSelector((state) => state.estadosReducer.estados)
    
    return (

    <div className="container">
    <div className={!props.open?`content`:'move-book content'}>
        <div className="book">
            <ul className={props.open?"open-front front":'front'}>
                <li>
                    <div className="frontcover">     
                        <h2>Estados e municipios do Brasil</h2>              
                        <img src={mapaBrasil} alt=""/>        
                    </div>
                </li>
                <li className="page-principal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores, omnis totam, dolorem rem iure quod dicta eius vitae iusto velit dignissimos quos minus perspiciatis unde atque eos alias in.</li>
            </ul>
            
            {/* <ul className={props.open?"open-folha05 page page-principal":'page-principal page'}> */}
                {/* <li className='folha05'> */}
                    {props.handleTurnPage && municipio.map((munic, index)=>{
                        console.log(munic);
                        return(
                            <ul key={munic.id} onClick={() =>props.handleTurnPage(munic.id)} className={munic.turn?` open-folh5 page page-principal`:'page-principal page'} >
                                <li className={ ` folha${5+index} main-page`}>
                                <p>Municipio: {munic.nome}</p>
                                <p>Microrregiao: {munic.municipio.microrregiao.nome}</p>
                                <p>Mesorregiao: {munic.municipio.microrregiao.mesorregiao.nome}</p>
                                <p>UF: {munic.municipio.microrregiao.mesorregiao.UF.nome}</p>
                                <p>Regiao: {munic.municipio.microrregiao.mesorregiao.UF.regiao.nome}</p>
                                </li>
                            </ul>
                            
                        )
                    })}
                {/* </li> */}
            {/* </ul> */}
                    {/* <ul className={'open-folha04 page-principal page'}>
                        <li className=" page-principal red folha04">
                            <a href="#" className="red">{estados.nome}</a>
                        </li> 
                    </ul> */}
                    <ul className={props.open?"open-folha03 page page-principal":'page-principal page'}>
                        <li className="page-principal folha01"><img src={mapaMS} alt=""/></li>
                    </ul>
                <ul className={props.open?" open-folha02 page page-principal":'page-principal page'}>
                    <li className='folha02'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolorem, adipisci sequi quo deleniti maxime? Nesciunt ipsum, at doloremque assumenda explicabo nobis suscipit perspiciatis! Totam voluptas quos hic at aliquid!</li>
                </ul>
                
               <ul className={props.open?"open-folha01 page page-principal":'page-principal page'}>
               <li className='page-principal folha03' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem deserunt numquam totam aperiam sunt similique commodi odit, voluptate magnam eaque distinctio rerum, iste voluptates laborum! Deserunt, explicabo. Aut, quidem placeat.</li>
               </ul>
                
            
            <ul className="back">
                <li className="page-principal red">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aperiam odit tenetur ducimus praesentium in mollitia, ad natus asperiores. Iste, voluptas? Recusandae veritatis nihil omnis vero, vel at maiores cupiditate?</li>
                <li></li>
            </ul>
        </div>
  
    </div>
    
   </div> 
  )

   }

  


export default Book