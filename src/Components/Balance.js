import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
export const Balance = () => {
    const  { transactions } = useContext(GlobalContext);
    console.log(transactions);
    const amounts = transactions.map( (transaction) => transaction.amount );
    const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2)
    return (
        <div className='center'>
            <h2 className='title'>Your Balance</h2>
            <p className='total-bal'>${total}</p>
        </div>
    )
}
