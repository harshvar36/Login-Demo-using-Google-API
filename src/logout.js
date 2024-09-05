// src/Logout.js
import React from 'react';
import styled from 'styled-components';
import {googleLogout} from '@react-oauth/google';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const clientId="989727333395-mubnh7u9t0mshv7bc68u0a03hntfg3k2.apps.googleusercontent.com"

function Logout() {
  const onSuccess=()=>{
    console.log("Logout Successful!");
  }
  return (
    <Container>
    <h2>Welcome, User!</h2>
    <Button onClick={() => googleLogout({ onLogoutSuccess: onSuccess })}>
      Logout
    </Button>
  </Container>
  );
};

export default Logout;
