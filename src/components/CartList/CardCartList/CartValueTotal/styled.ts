import styled from "styled-components";

export const StyledCardTotalValue = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: var(--grey-4);

  div {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  button {
    color: var(--primary-color);
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;
