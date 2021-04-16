import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
export const Balance = () => {
    const  { transactions } = useContext(GlobalContext);
    const amounts = transactions.map( (transaction) => transaction.amount );
    const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2)
    return (
        <div className='center bal-wrap'>
            <h1 className='title'>Your Balance</h1>
            <p className='total-bal'>{total < 0 ? '- ₹' : '₹'} {total.replace("-", "")}</p>
        </div>
    )
}
