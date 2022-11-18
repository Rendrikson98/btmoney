import styled from 'styled-components';

export const Container = styled.main`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem; //serve para dar espaçamento do itens da tabela

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: var(--shape);
      font-weight: 400;
      color: var(--text-body);
      border-radius: 0.25rem;

      &:first-child {
        color: var(--text-title);
      }

      &.deposit {
        color: var(--green);
      }
      &.withdraw {
        color: var(--red);
      }
    }
  }
`;
