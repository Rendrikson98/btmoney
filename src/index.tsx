import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/globa';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model, //cria uma coluna ou collection do banco
  },

  seeds(server) {
    //serve o banco começar com dados
    server.db.loadData({
      transactions: [
        //precisa ser o nome no plural
        {
          id: 1,
          title: 'Freelancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('12-01-2022 09:00:00'),
        },
        {
          id: 2,
          title: 'aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('12-03-2022 10:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction'); //consome todos os resultados dessa tabela/collection
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data); //cria a tabela/collection e passa os dados
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
