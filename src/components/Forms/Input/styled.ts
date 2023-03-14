import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  width: 100%;
  display: flex;
  flex-direction: column;

  Input {
    border: solid 1px var(--grey-35);

    color: var(--grey-0);
  }

  Input:hover {
    border: solid 1px var(--primary-color);
  }
`;
