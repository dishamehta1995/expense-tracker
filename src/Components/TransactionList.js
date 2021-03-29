import React,{useContext, useEffect, useState} from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { Transcation } from './Transaction'
export const TransactionsList = () => {
    const [transactionType,setTransactionType] = useState('all')
    const {transactions} = useContext(GlobalContext)
    const [transactionData,setTransactionData] = useState(transactions)
    useEffect(() => {
        localStorage.setItem('transactions',JSON.stringify(transactions))
        switch (transactionType) {
            case 'income':
                return setTransactionData(transactions.filter((item) => item.amount > 0 ))    

            case 'expense':
                return setTransactionData(transactions.filter((item) => item.amount < 0 ))

            default:
                return setTransactionData(transactions);
        }
    }, [transactions,transactionType])

    const filterTransaction = (e) =>{
        setTransactionType(e.target.attributes.datatype.value)
    }

    return (
        <>
            <ul className='d-flex tab-list' onClick={filterTransaction}>
                <li className={transactionType === 'all' ? 'active title tab-items' : 'title tab-items'} datatype='all'>All</li>
                <li className={transactionType === 'income' ? 'active title tab-items' : 'title tab-items'} datatype='income'>Income</li>
                <li className={transactionType === 'expense' ? 'active title tab-items' : 'title tab-items'} datatype='expense'>Expense</li>
            </ul>
            <ul id="list" className="list">
                {
                    transactionData.length === 0 ? <li className='list-item'>No transaction added yet!</li> :
                    transactionData.map((transaction,i) => (<Transcation key={i} transaction={transaction} transactionType={transactionType}/>))
                }
            </ul>
        </>
    )
}
