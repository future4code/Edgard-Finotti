import styled from 'styled-components'

export const DivisaoAutorizacao = styled.div`
    background-color: #202124;
    
    width: 400px;
    height: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    margin: 16px auto;

`
export const Titulo = styled.h3`
    color: white;

`

export const InputAutorizacao = styled.input`
    width: 80%;
    margin-bottom: 32px;
`

export const BotaoEntrar = styled.button`
    font-weight: bold;
    padding: 8px;
    border-radius: 8px;
    border: none;

    &:hover {
        cursor: pointer;
        color: blue;
    }
`