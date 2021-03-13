import styled  from 'styled-components'

export const DivHeader = styled.div`
    width: 100%;
    height: 90px;
    border: 1px solid gray;

    /* display: flex;
    justify-content: space-around;
    align-items: center; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export const DiviIconMenu = styled.div`
    height: 90px;
    display: flex;
    align-items: center;
    margin-left: 40px;
`

export const DivLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90px;
`

export const DivIconProfileUser = styled.div`
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const IconLogo = styled.img`
    height: 50%;
    margin: 0 8px;
`

export const TextLogo = styled.h1`
    
`
