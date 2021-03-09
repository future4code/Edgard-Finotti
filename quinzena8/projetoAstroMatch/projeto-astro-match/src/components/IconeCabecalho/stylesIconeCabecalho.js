import { Icon } from '@material-ui/core'
import styled from 'styled-components'
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import GroupIcon from '@material-ui/icons/Group';

export const DivisaoIconeCabecalho = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    ${(props) => {
        
        if(props.telaInicial) {
            return "justify-content: flex-end;" 
        } else {
            return "justify-content: flex-start;"
        }
    }}
    
    
`
export const StyleGroupAddIcon = styled(GroupAddIcon)`
    height: 100%;
    cursor: pointer;

    
    
`

export const StyleGroupIcon = styled(GroupIcon)`
    height: 100%;
    cursor: pointer;
`

