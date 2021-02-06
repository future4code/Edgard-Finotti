import styled from 'styled-components'

export const DivisaoMenu = styled.div`
    display: flex;
    justify-content: space-around;
    
    border-radius: 8px;
    background-color: #202124;
`

export const ConteudoMenu = styled.div`
    margin: 0 16px;
`

export const ItemMenu = styled.h3`
    color: white;
    cursor: pointer;

    background-color: black;
    padding: 8px 10px;
    border-radius: 8px;

    :hover {
        color: greenyellow;
    }
`
