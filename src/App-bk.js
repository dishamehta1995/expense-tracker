import './assets/style.css';
import { Balance } from "./Components/Balance";
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionsList } from './Components/TransactionList';
import { AddTransactions } from './Components/AddTransactions';
import { GlobalProvider } from './Context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
        <section className='section-banner col'>
          <div className='light-wrap'>
            <Balance />
            <IncomeExpenses/>
          </div>
          <AddTransactions />
        </section>
        <section className="container col">
          <TransactionsList/>
        </section>
    </GlobalProvider>
  );
}

export default App;
 