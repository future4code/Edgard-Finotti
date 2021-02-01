import React  from 'react'
import styled from 'styled-components'

const DivisaoEtapa4 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Titulo = styled.h2`
    
`

const TextoAgradecimento = styled.p`

`

class Etapa04 extends React.Component {
    
    render() {
        return <DivisaoEtapa4>
            <Titulo>{this.props.titulo}</Titulo>
            <TextoAgradecimento>{this.props.textoAgradecimento}</TextoAgradecimento>
        </DivisaoEtapa4>
    }
}

export default Etapa04