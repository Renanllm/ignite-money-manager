import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { TransactionsTable } from "./components/TransactionsTable";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <TransactionsTable />
      <GlobalStyle />
    </div>
  );
}
