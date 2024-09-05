// src/Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
import {GoogleLogin} from '@react-oauth/google';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const clientId="989727333395-mubnh7u9t0mshv7bc68u0a03hntfg3k2.apps.googleusercontent.com";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


    const onSuccess=(res)=>{
      console.log("Login SUCCESS! User:",res.profileObj);
  
    }
    const onFailure=(res)=>{
      console.log("Login Failed!",res);
    }

  return (
    <Container>
      <h2>Login</h2>
        
        <div>
            <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div>
            <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <div>
          <Button onClick={onSuccess} >Login</Button>
        </div>
        <div>
        <GoogleLogin
          clientid={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
          useOneTap
        />
        </div>
        
    </Container>
  );
};

export default Login;
