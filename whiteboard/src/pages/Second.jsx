import React from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";
const Section = styled.div`
  margin: 15rem 9rem;
  background-color: linear-gradient(135deg, #f5f5f5, #e0e0e0);
  display: flex;
  flex-direction: column; /* Ensures items are arranged vertically */
  align-items: flex-start; /* Align items to the start (left) */
  text-align: left; /* Align text to the left */

  @media (max-width: 768px) {
    text-align: center;
    align-items: center; /* Center align items on smaller screens */
  }

  h2 {
    font-size: 3.8rem;
    font-family: 'Roboto', sans-serif;
  }

  p {
    margin-bottom: 2rem;
    font-size: 2rem;
    color: #2e2e2e;
  }

  img {
    max-width: 80%; /* Ensure image is not too large */
    height: auto;
    border: 5px solid white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 1rem;
    align-self: center; /* Center image horizontally */
    transition: transform 0.3s ease-in-out;

    /* Add hover effect */
    &:hover {
      transform: scale(1.05); /* Scale up the image slightly on hover */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add a stronger shadow on hover */
    }

    @media (max-width: 768px) {
      max-width: 80%;
    }
  }

  span.learn {
    color: red;
  }

  span.learn2 {
    color: magenta;
  }
`;

const HorizontalLine = styled.div`
  border-top: 3px solid red;
`;

const Button = styled.div`
  width: 170px;
  margin-top: 7rem;
  margin-left: 45%;
  padding: 10px 20px;
  background-color: #f06;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #fff;
    color: #f06;
  }

  @media (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

function Second() {
  const { isAuthenticated } = useAuth0();
  const handleClick = () => {
    if (isAuthenticated) {
      window.location.href = '/welcome'; // Redirect if authenticated
    } else {
      // Handle non-authenticated user
      // For example, display a login modal or redirect to a login page
      alert("Login please!");
    }
  };

  return (
    <>
      <Section>
        <h2><span className="learn">Learn</span> complex topics visually.</h2>
        <p>To truly make sense of what you've learned, visualize your notes with whiteboards, sections, and mindmaps.</p>
        <img src="./images/notes.png" alt="Visualize notes" />
      </Section>
      <Section>
        <h2><span className="learn2">Research</span> and discover insights faster.</h2>
        <p>Bring all your highlights, annotations, PDFs, journals, and research notes together to discover new insights.</p>
        <img src="./images/homepage.png" alt="Discover insights" />
      </Section>
      <div>
        <Button onClick={handleClick}>Start your journey</Button>
        <ImageContainer>
          <img src="./images/second.jpg" alt="Visualize notes" />
        </ImageContainer>
      </div>
    </>
  );
}

export default Second;
