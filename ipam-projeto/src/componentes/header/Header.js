import React from 'react'
import '../header/header.css'

function Header(props) {
  return (
    <header> 
        <div class="container-selects">
            <select name="estado" id="estado">
                <option value="Mato Grosso">Mato Grosso</option>
                <option value="Mato Grosso Sul">Mato Grosso Sul</option>
                <option value="Mato Grosso">Mato Grosso</option>
            </select>
            <select class="select-menu" name="estado" id="estado">
                <option value="Mato Grosso">Mato Grosso</option>
                <option value="Mato Grosso Sul">Mato Grosso Sul</option>
                <option value="Mato Grosso">Mato Grosso</option>
            </select>
            <button onClick={props.handleOpen} class="btn">Ok</button>
            
        </div>
    </header>
  )
}

export default Header