import React,{useState} from 'react';
import Login from './login';
import Logout from './logout';
import { createRoot } from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId="989727333395-mubnh7u9t0mshv7bc68u0a03hntfg3k2.apps.googleusercontent.com";
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <React.StrictMode>
      <App />
      
    </React.StrictMode>
  </GoogleOAuthProvider>
);
function App(){

  return(
    <div className='App'>
      <Login/>
      <Logout/>
    </div>
  );
};

export default App;
