import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 10px;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > img {
        width: 20px;
        height: 20px;
      }
    }

    strong {
      display: block;
      margin-top: 10px;
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
    }
    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }

  @media (min-width: 768px) {
    gap: 2rem;

    div {
      padding: 1.5rem 2rem;

      header {
        > img {
          width: 40px;
          height: 40px;
        }
      }

      strong {
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 3rem;
      }
    }
  }
`;
