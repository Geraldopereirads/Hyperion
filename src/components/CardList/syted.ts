import styled from "styled-components";

export const StyledCardList = styled.ul`
  display: flex;

  gap: 20px;

  overflow-x: auto;

  padding-bottom: 40px;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;
