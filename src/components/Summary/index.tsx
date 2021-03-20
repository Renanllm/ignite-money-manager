import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from "../../hooks/useTransactions";
import { TransactionTypeEnum } from "../../shared/enums/transaction-type.enum";
import { currencyConverter } from "../../shared/utils/currency-converter";
import { Container } from "./styles";


export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acumulator, transaction) => {
    if (transaction.type === TransactionTypeEnum.DEPOSIT) {
      acumulator.deposits += transaction.amount;
      acumulator.total += transaction.amount;
    } else {
      acumulator.withdraws += transaction.amount;
      acumulator.total -= transaction.amount;
    }

    return acumulator;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{currencyConverter(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- {currencyConverter(summary.withdraws)}</strong>
      </div>
      <div className="highlight-container">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{currencyConverter(summary.total)}</strong>
      </div>
    </Container>
  );
}