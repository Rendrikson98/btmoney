import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

export const TransactionTable = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await api('http://localhost:3000/api/transactions');

      console.log(response);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12000</td>
            <td>Desenvolvimento</td>
            <td>18/11/2022</td>
          </tr>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="withdraw">- R$ 12000</td>
            <td>Desenvolvimento</td>
            <td>18/11/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
