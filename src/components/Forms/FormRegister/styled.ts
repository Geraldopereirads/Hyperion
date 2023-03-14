import styled from "styled-components";

export const StyledSectionRegister = styled.section`
  width: 100vw;
  height: 100vh;

  background-image: url("https://uploaddeimagens.com.br/images/004/384/679/original/back.png?1678453845");
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 30px;

  .imageRegister {
    display: none;
  }

  form {
    background-color: var(--grey-4);

    width: 90%;

    padding: 30px 10px 30px 10px;

    border-radius: var(--border-secondary);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 25px;
  }

  h1 {
    color: var(--grey-0);

    font-size: var(--Titles);
    font-weight: 700;
  }

  button {
    width: 100%;
    height: 38.73px;

    background-color: var(--primary-color);
    color: var(--grey-0);

    border-radius: var(--default-border);
  }
  a {
    color: var(--grey-0);
  }

  a:hover {
    border-bottom: solid 1px var(--primary-color);
  }

  @media (min-width: 1000px) {
    .imageRegister {
      display: block;
      width: 60%;
    }

    form {
      width: 40%;
      padding: 50px;
      gap: 26px;
    }
  }
`;

export const StyledDivRegisterPage = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  z-index: 10;

  background-color: var(--grey-4);
  border-radius: var(--border-secondary);

  @media (min-width: 1000px) {
    max-width: 1200px;
    flex-direction: row;
    justify-content: space-between;
  }

  label {
    color: white;
    margin-bottom: -15px;
  }
`;
