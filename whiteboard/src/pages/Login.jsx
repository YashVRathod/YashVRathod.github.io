import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.black};
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  transition: background-color 0.3s, color 0.3s, transform 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.05);
  }
`;

const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const WelcomeMessage = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-weight: bold;
  margin-right: 1rem;
`;

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/welcome"); // Redirect to welcome page after successful login
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div>
      
      {isAuthenticated ? (
        <WelcomeContainer>
          <Button onClick={handleLogout}>Log Out</Button>
        </WelcomeContainer>
      ) : (
        <Button onClick={handleLogin}>Log In</Button>
      )}
    </div>
  );
};

export default LoginButton;
