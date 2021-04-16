import React,{useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';

export const Transcation = ({transaction,i,transactionType}) => {
    const  { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount > 0 ? '+' : '-';
    const category = [...transaction.category]
    return (
        <>
            <li className='list-item d-flex align-baseline justify-space' key={i}>
                <div className='d-flex align-baseline '>
                    <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
                    <div className='col'>
                        <p className='title'>{transaction.text} </p>
                        <p className='time descp'>{transaction.date}</p>
                        <ul className='cat descp d-flex'>
                            {
                                category.map((element,i) => {
                                    return <li key={i} className='item'>{element}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
                    <p className={transaction.amount > 0 ? 'amount plus' : 'amount minus'}>{sign}₹{Math.abs(transaction.amount)}</p>
            </li>
        </>
    )
}
