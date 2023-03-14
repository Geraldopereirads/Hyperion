import styled from "styled-components";

export const HomeStyled = styled.main`
  overflow: none;

  background-color: #0f0f0f;

  Header {
    padding: 44px 50px;

    max-height: 60px;

    position: absolute;
  }
`;


export const HomeStart = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-image: url("https://uploaddeimagens.com.br/images/004/384/679/original/back.png?1678453845");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Hero = styled.div`
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: -80px;

  h1 {
    font-size: 9rem;
    font-weight: bold;
    color: white;
  }

  span {
    color: white;
    font-weight: bold;

    padding: 5px 35px;

    border-radius: 15px;

    background-color: var(--primary-color);
  }
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  
  position: absolute;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.75);
`;

export const About = styled.section`
  width: 100%;

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  color: #ffffff;

  z-index: 5;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  span {
    padding: 0 16px;

    text-align: center;
  }

  ul {
    width: 100%;

    padding: 5%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    overflow-x: auto;

    gap: 35px;
  }

  ul li {
    display: flex;
    flex-direction: column;
    align-items: center;

    z-index: 15;

    gap: 15px;
  }

  ul li a {
    transition: 0.5s ease-in-out;
  }

  ul li a:hover {
    color: var(--primary-color);
  }

  ul li img {
    min-width: 100px;
    max-width: 150px;

    border-radius: 50%;

    transition: 0.5s ease-in-out;
  }

  ul li img:hover {
    scale: 1.1;
  }

  @media (min-width: 1000px) {
    ul {
      justify-content: center;
    }

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
    }
  }
`;
export const WaveBG = styled.img`
  width: 100%;
  z-index: 1;

  position: absolute;
  bottom: 0;

  opacity: 0.5;
`;
