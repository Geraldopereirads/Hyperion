import styled from "styled-components";

export const StyledCardList = styled.li`
  display: flex;
  gap: 20px;
  color: white;

  img {
    width: 50%;
    object-fit: contain;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
