import { GlobalProvider } from './Context/GlobalState';
import './assets/style-2.css';
import { Header } from "./Components/Header";
import { Balance } from "./Components/Balance";
import { IncomeExpenses } from './Components/IncomeExpenses';
import { TransactionsList } from './Components/TransactionList';
import { AddTransactions } from './Components/AddTransactions';
import { Sheets } from './Components/Sheets';
import { Categories } from './Components/Categories';

const App = () => {  
  return (
    <GlobalProvider>
      <input 
        type='checkbox' 
        className='menuBtn' 
        id='menuBtn'
      />
      <label htmlFor='menuBtn'>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z" fill="#1040e2"/><path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z"/></svg>
      </label>
      <section className='col col-1 menu'>
        <div className='close'>
          <label htmlFor='menuBtn'><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg></label>
        </div>
        <Sheets/>
        <Categories/>
      </section>
      <section className='col w-100 d-flex flex-wrap'>
        <div className='col col-2 center-col w-100 header-col'>
          <Header/>
        </div>
        <div className='col col-2 center-col'>
          <TransactionsList/>
        </div>
        <div className='col col-3'>
          <Balance/>
          <IncomeExpenses/>
          <AddTransactions />
        </div>
      </section>
    </GlobalProvider>
  );
}

export default App;
 