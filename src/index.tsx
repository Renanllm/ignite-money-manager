import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';
import { TransactionTypeEnum } from './shared/enums/transaction-type.enum';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: '1',
          title: 'Compra 01',
          amount: 300,
          category: 'Compras',
          type: TransactionTypeEnum.WITHDRAW,
          createdAt: new Date('2021-03-19')
        },
        {
          id: '2',
          title: 'Entrada 01',
          amount: 1200,
          category: 'Salário',
          type: TransactionTypeEnum.DEPOSIT,
          createdAt: new Date('2021-03-19')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
