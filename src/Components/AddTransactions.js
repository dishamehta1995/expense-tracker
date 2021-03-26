import React,{useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const AddTransactions = () => {
    const[text, setText] = useState('');
    const[amount, setAmount] = useState('');
    const  { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text,
            amount: +amount,
            date: date.toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "numeric",
                minute: "2-digit"
              })
        }
        addTransaction(newTransaction);
    }

    return (
        <>
            <h4 className='title'>Add new transaction</h4>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input 
                        type="text" 
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter text..." 
                        required
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount" >Amount <span>-ve (expense), +ve (income)</span></label >
                    <input 
                        type="number" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder="Enter amount..." 
                        required
                    />
                </div>
                <button className="btn">Add transaction</button>
            </form>   
        </>
    )
}
