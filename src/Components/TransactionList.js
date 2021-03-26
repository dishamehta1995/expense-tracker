import React,{useContext, useEffect} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { Transcation } from './Transaction'
export const TransactionsList = () => {
    const  {transactions} = useContext(GlobalContext)
    useEffect(() => {
        localStorage.setItem('transactions',JSON.stringify(transactions))
    }, [transactions])

    return (
        <>
          <h3 className='title'>All</h3>
            <ul id="list" className="list">
                {
                    transactions.length === 0 ? <li className='list-item'>No transaction added yet!</li> :
                    transactions.map((transaction,i) => (<Transcation key={i} transaction={transaction}/>))
                }
            </ul>  
        </>
    )
}
