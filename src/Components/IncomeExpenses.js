import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const IncomeExpenses = () => {
    const  { transactions } = useContext(GlobalContext);
    const amounts = transactions.map( (transaction) => transaction.amount );
    const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc += item),0).toFixed(2)
    const expense = amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0).toFixed(2)
    return (
        <ul className="inc-exp-container d-flex justify-space">
            <li className='list-item'>
                <h2 className='title-2'>Income</h2>
                <p className="money plus income">₹ {income}</p>
            </li>
            <li className='list-item'>
                <h2 className='title-2'>Expense</h2>
                <p className="money minus expense">₹ {expense.replace("-", "")}</p>
            </li>
        </ul>
    )
}
