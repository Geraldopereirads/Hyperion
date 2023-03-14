import styled from "styled-components";

export const StyledGameCard = styled.li`
  min-width: 280px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 5px;
  padding: 10px;

  border-radius: 4px;

  background-color: var(--secondary-color);

  img {
    width: 100%;

    object-fit: contain;
  }
  .info__container {
    padding: 10px;

    h4 {
      font-size: var(--text);

      color: var(--grey-0);
    }

    span {
      font-size: var(--text);
    }
    .infor__sistem {
      color: var(--grey-1);
    }

    .info__category {
      text-decoration: underline;
      color: var(--grey-2);
    }
  }
  .footer__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;

    p {
      font-size: var(--text);

      line-height: 31px;

      color: var(--primary-color);
    }

    button {
      background-color: var(--primary-color);
      color: var(--grey-4);

      border-radius: 8px;

      padding: 5px 10px;
    }
  }
`;
