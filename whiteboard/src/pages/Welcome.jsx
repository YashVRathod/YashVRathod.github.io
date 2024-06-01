import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import Header from "../Components/Header";

const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Horizontally center content */
  margin-top: 15%;
  flex-direction: column; /* Align content vertically */
`;

const WelcomeHeading = styled.h2`
  color: #f06;
  font-size: 6rem;
  margin-bottom: 10px;
`;

const WelcomeMessage = styled.p`
  font-size: 1.9rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #f06; /* Background color for button */
  border: none;
  border-radius: 5px; /* Rounded corners */
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #e0555a; /* Darker shade on hover */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(240, 6, 6, 0.3); /* Focus outline */
  }
`;

function Welcome() {
  const { user } = useAuth0();
  const handleClick = () => {
    // Redirect to "/addnote"
    window.location.href = '/addnote';
  };

  return (
    <>
      <Header/>
      <WelcomeContainer>
        {user && (
          <>
            <WelcomeHeading>Welcome, {user.name}!</WelcomeHeading>
            <WelcomeMessage>We're glad to have you here.😁</WelcomeMessage>
            <Button onClick={handleClick}>Start your journey</Button>
          </>
        )}
      </WelcomeContainer>
    </>
  );
}

export default Welcome;
