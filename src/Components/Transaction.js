import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const Transcation = ({transaction,i,transactionType}) => {
    const  { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount > 0 ? '+' : '-';
    return (
        <>
            <li className='list-item' key={i}>
                <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
                <div>
                    <p className='title'>{transaction.text} </p>
                    <p className='time'>{transaction.date}</p>
                </div>
                <p className={transaction.amount > 0 ? 'amount plus' : 'amount minus'}>{sign}₹{Math.abs(transaction.amount)}</p>
            </li>
        </>
    )
}
