import React from 'react'
import { RxLinkedinLogo, RxGithubLogo } from 'react-icons/rx';
import '../footer/footer.css'

function Footer() {
  return (
    <footer>
      <ul className='container-linkes-footer'>
        <li><a href='https://www.linkedin.com/in/everton-de-souza-ferreira-1417921b2/'>{<RxLinkedinLogo size={25}/>} LinkedIn </a>  </li>
        <li><a href='https://github.com/EvertonSouzaFerreira'>  {<RxGithubLogo size={25}/>} GitHub</a></li>
        <li>&copy; 2022 Everton Ferreira</li>
      </ul>
    </footer>
  )
}

export default Footer