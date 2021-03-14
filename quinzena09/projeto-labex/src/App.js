import React from 'react'
import Router from './components/routes/Routes';
import CssBaseline from '@material-ui/core/CssBaseline';
import { DivApp } from './styledApp'

function App() {
  
  return (
    <DivApp>
      <React.Fragment>
        <CssBaseline />
        <Router />
      </React.Fragment>
    </DivApp>
    
  );
}

export default App;
