import React from "react";
import styled from "styled-components";

function Login(props) {
  return (
    <LoginContainer>
      <LoginImage
        src="https://nutshellschool.com/wp-content/uploads/2020/04/Unknown-Facts-About-Amazo.jpg"
        alt="amazon_logo"
      />
      <LoginContent>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="text" />
          <LoginButton>
            <button>Sign in</button>
          </LoginButton>
        </form>
        <p>
          By signing in you agree to Amazon's conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice
        </p>
        <RegisterButton>
          <button>Create your Amazon Account</button>
        </RegisterButton>
      </LoginContent>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 100vh;
`;

const LoginImage = styled.img`
  object-fit: contain;
  margin: 20px 0;
  width: 100px;
`;

const LoginContent = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid lightgray;

  > h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  > form > h5 {
    margin-bottom: 5px;
  }

  > form > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
    outline: 0;
  }

  > p {
    margin-top: 15px;
    font-size: 12px;
  }
`;

const LoginButton = styled.div`
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  display: grid;
  border-color: #a88734 #9c7e31 #846a29;

  > button {
    background: transparent;
    border: none;
  }
`;

const RegisterButton = styled.div`
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  display: grid;

  border-color: #a88734 #9c7e31 #846a29;
  > button {
    background: transparent;
    border: none;
  }
`;
