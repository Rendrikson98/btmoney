import { useContext } from 'react';
import { Container } from './styles';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';
import total from '../../assets/total.svg';
import { TransactionsContext } from '../TransactionsContext.';

export const Summary = () => {
  const { transactions } = useContext(TransactionsContext);
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$ 100,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>R$ 10,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={total} alt="Total" />
        </header>
        <strong>R$ 90,00</strong>
      </div>
    </Container>
  );
};
