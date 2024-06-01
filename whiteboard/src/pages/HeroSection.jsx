import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Footer from '../Components/Footer';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Second from "./Second";
import Login from './Login';
import Header from "../Components/Header";

const HeroSection = () => {
  return (<>
    <Header/>
    <Wrapper>
      <div className="container">
        <div className="section-hero-data">
          <p className="hero-top-data">Unleash Your Creativity</p>
          <h1 className="hero-heading">MindScribe</h1>
          <p className="hero-para">
            Transform the way you capture and organize ideas. With NoteMaster, you can turn your thoughts into actions effortlessly. Whether you're brainstorming, planning, or simply jotting down thoughts, we've got you covered.
          </p>
          <p className="login">Login to continue</p>
        </div>
      </div>
      <div className="demo-section">
        <div className="demo-text">
          <h2 className="h2">Browse and manage your notes</h2>
          <hr></hr>
          <h2 className="subheading">seamlessly on any device!</h2>
        </div>
        <div className="demo-image">
          <img src="./images/iPhone3.png" alt="Mobile Image" className="mobile-img" />
        </div>
        
      </div>
      <div className="demo-section">
        <div className="demo-image">
          <img src="./images/iPhone2.png" alt="Mobile Image" className="mobile-img" />
        </div>
        <div className="demo-text">
          <h2 className="h2">Effortlessly organize your thoughts </h2>
          <hr></hr>
          <h2 className="subheading">with our intuitive note-taking app</h2>
        </div>
      </div>
      <Second/>
      <Footer/>
    </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background: white;
  height: 100vh;

  .container {
    max-width: 95%;
    margin: auto;
    text-align: center;
    max-width: 1400px; 
  }

   .login{
    color:#f06;
  }
  .demo-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap:2rem;
    margin-top: 30rem;
    flex-direction: row;
  }

  .demo-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-right: 2rem;
  }

  .demo-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .mobile-img {
    height: 580px;
    width: 300px;
    border: 2px solid black;
    border-radius: 15px;
  }

  .h2 {
    color:#BEE3DB;
    font-size: 4rem;
    text-align: left;
  }

  .subheading {
    font-size: 3rem;
    text-align: left;
  }

  .section-hero-data {
    color: #fff;
    animation: fadeIn 1.5s ease-in-out;
  }

  .hero-heading {
    ${'' /* background: linear-gradient(to bottom, #006400, #00FF00); */}
    background: linear-gradient(to right, pink, red);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-transform: uppercase;
    font-size: 5.4rem;
    margin: 1rem 0;
    line-height: 1.2;
    letter-spacing: 0.05em;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: #ff0000;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    line-height: 1.5;
    font-size: 1.2rem;
    margin-left: auto;
    margin-right: auto;
  }

  .btn {
    max-width: 16rem;
    background-color: white;
    color: #f06;
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
    display: inline-block;

    &:hover {
      background-color: #f06;
      color: #fff;
      transform: scale(1.05);
    }
  }


  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .hero-heading {
      font-size: 4rem;
    }

    .demo-section {
      flex-direction: column;
      align-items: center;
    }

    .demo-text {
      margin-right: 0;
      text-align: center;
    }

    .h2, .subheading {
      text-align: center;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default HeroSection;
