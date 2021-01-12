import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="small-container">
            <img src={props.imagem}/>
            <h4>{props.textoTipo}&nbsp;</h4> <p>{props.email}</p>
        </div>
    )
}

export default CardPequeno;