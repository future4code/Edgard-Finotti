import styled  from 'styled-components'

export const DivLogin = styled.div`
    height: 90%;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const DivContentLogin = styled.div`
    width: 400px;
    height: 400px;

    border: 1px solid black;
    border-radius: 8px;
    
`

export const TextLogin = styled.h1`
    text-align: center;
`

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`

export const InputEmail = styled.input`
    width: 60%;
    margin: 16px 0;
`

export const InputPassword = styled.input`
    width: 60%;
    margin: 16px 0;
`

export const ButtonLoging = styled.button`
    margin: 16px 0;
    padding: 12px 16px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`