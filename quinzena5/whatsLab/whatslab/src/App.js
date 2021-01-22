import styled from 'styled-components';
import { Principal } from './componentes/Principal/Principal';

const DivisaoApp = styled.div`
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <DivisaoApp>
      <Principal />
    </DivisaoApp>
    
  );
}

export default App;
