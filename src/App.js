import './assets/style.css';
import { Balance } from "./Components/Balance";
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionsList } from './Components/TransactionList';
import { AddTransactions } from './Components/AddTransactions';
import { GlobalProvider } from './Context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
        <div className='header'>
          <Balance />
          <IncomeExpenses/>
        </div>
        <div className="container">
          <TransactionsList/>
          <AddTransactions />
        </div>
    </GlobalProvider>
  );
}

export default App;
 