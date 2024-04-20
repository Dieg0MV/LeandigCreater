import React from 'react';
import { AiOutlineBars } from "react-icons/ai";
import './statics/css/topstile.css';

export default function Tops(){
    return(
        <header className='barra_sup'>
            <AiOutlineBars className='barras'/>
            <ul className='indices'>
                <li> <a href="">Inicio</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Cursos</a></li>
                <li><a href="">Contacto</a></li>
            </ul>
            
            <div className='navbar'>
            <input type="text" className='search' placeholder='Search' />
            <button type="button" className='send'> Send</button>
            </div>
        </header>
    )
}


