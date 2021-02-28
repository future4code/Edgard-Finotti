import styled from 'styled-components'

export const DivisaoCardPerfil = styled.div`
    background-image: url(${(props => props.imagem)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    box-shadow: 4px 4px #e0e0e0;
    height: 80%;
    margin: 16px 16px 0 16px;
`