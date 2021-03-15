import React from 'react'
import {
    DivCandidates, 
    DivDetailsTravel, 
    DivHomeRestricted, 
    DivNewTravel, 
    DivTravels,
    ImageCandidates,
    ImageDetails,
    ImageNewTravel,
    ImageTravels
} from './stylesRestrictedScreen'
import imagem01 from '../../assets/imagem01.jpg'
import imagem02 from '../../assets/imagem02.jpg'
import imagem03 from '../../assets/imagem03.jpg'
import imagem04 from '../../assets/imagem04.jpg'
import { goToDetailsTravels, goToTravels } from '../../components/routes/Coordinator'
import { useHistory } from 'react-router'

export default function RestrictedScreen () {
    const history = useHistory();

    return (
        <DivHomeRestricted>
            <DivTravels onClick={() => goToTravels(history)}  >
                <h4>Viagens</h4>
                <ImageTravels src={imagem01} />
            </DivTravels>
            <DivDetailsTravel onClick={() => goToDetailsTravels(history)}>
                <h4>Detalhes e Candidatos Viagem</h4>
                <ImageDetails src={imagem02} />
            </DivDetailsTravel>
            <DivNewTravel>
                <h4>Criar Nova Viagem</h4>
                <ImageNewTravel src={imagem03} />
            </DivNewTravel>
            <DivCandidates>
                <h4>Aprovações Candidatos</h4>
                <ImageCandidates src={imagem04} />
            </DivCandidates>

            
        </DivHomeRestricted>
    )
}