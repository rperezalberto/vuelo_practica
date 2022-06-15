import React from 'react';
import './asessts/css/estilos.css';
import { LoginContents } from './contents/LoginContents';
import { LoginScreen } from './router/LoginScreen';


const App = () => {

  return (
    <div className='container-flud'>
        <LoginContents>
           <LoginScreen/>
        </LoginContents>
    </div>
  )
}

export default App;
