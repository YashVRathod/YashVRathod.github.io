import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <button>Get Started</button>
            </NavLink>
          </div>
        </div>
      </section>

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>MindScribe</h3>
            <p>Unleash Your Ideas</p>
          </div>

          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <FaDiscord className="icons" />
              </div>
              <div>
                <FaInstagram className="icons" />
              </div>
              <div>
                <a>
                  <FaYoutube className="icons" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 8857804493</h3>
          </div>
        </div>

        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} MindScribe. All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: #fff3e0;
    border-radius: 1rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(50%);
    display: flex;
  }

  .contact-short-btn {
      button {
        background-color: white;
        color: #f06;
        border: none;
        padding: 1rem 2rem;
        border-radius: 5px;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;
        transition: background-color 0.3s, color 0.3s, transform 0.3s;

        &:hover {
          background-color: #f06;
          color: #fff;
          transform: scale(1.05);
        }
      }
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: white;
    border:2px solid #f06;

    h3 {
      color: blue; /* Changed color to yellow */
      margin-bottom: 2.4rem;
    }

    p {
      color: black;
    }

    .footer-about {
      p {
        color: black;
      }
    }

    .footer-subscribe {
      form {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        input[type="email"] {
          padding: 1rem;
          border-radius: 5px;
          border: none;
          outline: none;
          font-size: 1rem;
        }

        input[type="submit"] {
          padding: 1rem;
          border-radius: 5px;
          border: none;
          background-color: white;
          color: #f06;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s, color 0.3s, transform 0.3s;

          &:hover {
            background-color: #f06;
            color: #fff;
            transform: scale(1.05);
          }
        }
      }
    }

    .footer-social {
      .footer-social--icons {
        display: flex;
        gap: 2rem;

        div {
          padding: 1rem;
          border-radius: 50%;
          border: 2px solid #ecf0f1;

          .icons {
            color: blue;
            font-size: 2.4rem;
            position: relative;
            cursor: pointer;
            transition: transform 0.3s, color 0.3s;

            &:hover {
              color: #3498db; /* Changed color to blue */
              transform: scale(1.2);
            }
          }
        }
      }
    }

    .footer-contact {
      h3 {
        color: black;
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: #f06;
        height: 0.1px;
      }

      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          color: #f06;
        }

        div {
          display: flex;
          gap: 1rem;

          p {
            cursor: pointer;
            transition: color 0.3s;

            &:hover {
              color: #3498db; /* Changed color to blue */
            }
          }
        }
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      flex-direction: column;
      text-align: center;

      .contact-short-btn {
        margin-top: 1rem;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }

  /* Rest of the styles remain unchanged */
`;

export default Footer;
