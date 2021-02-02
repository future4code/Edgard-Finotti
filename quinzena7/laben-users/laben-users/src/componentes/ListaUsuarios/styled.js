import styled from "styled-components";

export const DivisaoListarUsuarios = styled.div`
    width: 400px;
    margin: 0 auto;
`

export const Titulo = styled.h1`
    text-align: center;
`

export const DivisaoListagemDeUsuarios = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 50px;
    padding: 0 8px;

    border-bottom: 1px solid black;
`
export const NomeUsuario = styled.p`
    font-size: 20px;
`
export const ImagemBotaoExcluir = styled.img`
    height: 50%;

    :hover {
        cursor: pointer;
    } 
`
export const MensagemListaVazia = styled.p`
    text-align: center;
    font-size: 32px;
    
`

export const DivisaoBotaoCadastrarUsuario = styled.div`
    display: flex;
    justify-content: flex-end;
`

export const BotaoCadastrarNovoUsuario = styled.button`
    font-weight: bold;
    padding: 8px;

    :hover {
        cursor: pointer;
    }
`