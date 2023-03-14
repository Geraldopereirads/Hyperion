import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  min-width: 100%;
  max-width: 1200px;
  background-color: transparent;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  z-index: 100000;
  top: 0;

  display: flex;
  flex-direction: column;

  min-width: 100%;
  max-width: 1200px;
  padding: 20px 10px 0 10px;
  gap: 20px;

  background-color: transparent;
  align-items: center;
  justify-content: space-between;

  .gamestore {
    color: var(--primary-color);
  }

  > div {
    display: flex;
    justify-content: space-between;

    width: 100%;
    gap: 5px;

    font-weight: 700;
    color: white;
  }
  nav {
    display: flex;
    justify-content: space-between;

    width: 100%;
    gap: 10px;
    color: white;
  }

  img {
    margin-top: 15px;
  }
  .chakra-avatar__badge {
    transform: translate(40%, 70%);
    width: 15px;
    height: 15px;
  }
  .cartContainer {
    position: relative;
  }
  .cartContainer > button {
    border-radius: 20px;
    color: white;
  }

  .menuPos {
    transform: translate(0%, -10%);
  }
  .cartContainer > span {
    background-color: var(--primary-color);
    height: 18px;
    width: 18px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    bottom: 0px;
    right: 10px;
    font-size: smaller;
    font-weight: 700;
  }
  span > p {
    position: absolute;
    bottom: -2px;
    right: 5px;
  }

  .btnsLogReg > button {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    color: white;
    height: 30px;
    padding: 0 10px;
  }
  .btnsLogReg {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .chakra-menu__menu-list css-1z05u95 {
  }

  .css-r6z5ec {
    z-index: 10;
  }

  @media (min-width: 600px) {
    flex-direction: row;

    > div {
      display: flex;
      justify-content: flex-start;
      gap: 15px;
    }

    nav {
      display: flex;
      justify-content: flex-end;
      gap: 15px;
    }
  }
`;
