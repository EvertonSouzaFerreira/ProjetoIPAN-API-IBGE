import React, { useState } from 'react'
import '../book/book.css'
import mapaBrasil from '../../imagens/map do brasil-transparent02.png'
import mapaMS from '../../imagens/estado do mato grosso do sul.png'

function Book(props) {
    const [next, setNext] = useState(false)
    const [addTurn, setAddTurn] = useState(false)
    const [elemento, setElemento] = useState('')

    const array = ['um']

   const handleturn = () =>{
        setNext(true)
        setAddTurn(!addTurn)
        // array.push(... array,'dois')
        console.log(array);
       return(
        <>
          {setElemento( <li className='folha05'>vindo do resturne</li>)}
          
        </>
            
        )
        
   }

   


    return (
    <div className="container">
    <div className="content">
        <div className="book">
            <ul className={props.open?"open-front front":'front'}>
                <li>
                    <div className="frontcover">                   
                        <img src={mapaBrasil} alt=""/>        
                    </div>
                </li>
                <li className="page-principal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolores, omnis totam, dolorem rem iure quod dicta eius vitae iusto velit dignissimos quos minus perspiciatis unde atque eos alias in.</li>
            </ul>
            <ul className={props.open?"open-folha05 page page-principal":'page-principal page'}>
                {elemento}
            </ul>
           
            {array.map((item) => {
                return(
                    <>
                    <ul className={addTurn? 'turn page':'open-folha04 page-principal page'}>
                        <li className=" page-principal red folha04">
                            <a href="#" className="red">{item}</a>
                        </li>
                        <li className=" page-principal red folha04-back">
                            <a href="#" className="red">test</a>
                        </li>
                    </ul>
                    <ul className={props.open?"open-folha03 page page-principal":'page-principal page'}>
                        <li className="page-principal folha01"><img src={mapaMS} alt=""/></li>
                    </ul>
                    </>
                )
            
            })}
           
            
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

    <button onClick={handleturn} class="btn">Next</button>
   </div> 
  )

   }

  


export default Book