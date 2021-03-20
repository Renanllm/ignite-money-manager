import { useTransactions } from "../../hooks/useTransactions";
import { currencyConverter } from "../../shared/utils/currency-converter";
import { dateConverter } from "../../shared/utils/date-converter";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {currencyConverter(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {dateConverter(new Date(transaction.createdAt))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}