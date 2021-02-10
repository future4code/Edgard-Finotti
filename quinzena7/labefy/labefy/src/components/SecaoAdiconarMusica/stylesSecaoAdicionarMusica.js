import styled from 'styled-components'

export const DivisaoAdicionarMusica = styled.div`
    background-color: black;

    margin: 16px 16px 0 0;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    
`

export const Titulo = styled.h3`
    color: white;
`

export const LabelNomeMusica = styled.label`
    color: white;
    
    
`
export const InputNomeMusica = styled.input`
    margin-bottom: 16px;
    width: 90%;
`

export const LabelArtista = styled.label`
    color: white;
`
export const InputArtista = styled.input`
    margin-bottom: 16px;
    width: 90%;
`

export const LabelLink = styled.label`
    color: white;
`
export const InputLink = styled.input`
    margin-bottom: 32px;
    width: 90%;
`

export const BotaoAdicionarMusica = styled.button`
    font-weight: bold;
    padding: 8px;
    border-radius: 8px;
    border: none;
    cursor: pointer;

    &:hover {
        color: blue;
    }
`
