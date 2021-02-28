import styled from 'styled-components'

export const DivisaoCardPerfil = styled.div`
    background-image: url(${(props => props.imagem)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    box-shadow: 4px 4px 4px #e0e0e0;
    height: 75%;
    margin: 16px 16px 0 16px;

    display: flex;

`

export const DivisaoInformacoes = styled.div`
    align-self: flex-end; 
    width: 100%;

    background-color: gray;
    opacity: 0.6;
    background-image: linear-gradient(gray, black);
    border-radius: 8px;
`


export const NomeIdade = styled.h2`
    color: white;
    font-weight: bolder;
    text-align: center;
   
`



export const Bio = styled.h3`
    color: white;
    font-weight: bold;
    text-align: center;
    
    
`