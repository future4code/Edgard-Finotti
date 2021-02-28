import styled from 'styled-components'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export const DiviCardPerfil = styled.div`
    height: 93%;
    
`

export const DivisaoCardPerfilImagem = styled.div`
    background-image: url(${(props => props.imagem)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    box-shadow: 4px 4px 4px #e0e0e0;
    height: 85%;
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

export const DivisaoAcoes = styled.div`
    
    height: 12%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const StyleHighlightOffIcon = styled(HighlightOffIcon)`
    cursor: pointer;
    color: red;
`
export const StyleFavoriteBorderIcon = styled(FavoriteBorderIcon)`
    cursor: pointer;
`