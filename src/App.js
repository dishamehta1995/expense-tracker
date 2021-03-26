import './assets/style.css';
import bgImag from './assets/bg.jpg'
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
        </div>
        <div className="container">
          <IncomeExpenses/>
          <TransactionsList/>
          <AddTransactions />
        </div>
    </GlobalProvider>
  );
}

export default App;
 