import React,{useState, useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const AddTransactions = () => {
    const[text, setText] = useState('');
    const[category, setCategory] = useState([]);
    const[amount, setAmount] = useState('');
    const[show, setShow] = useState(false);
    const[isIncome, setIsincome] = useState(false);
    const  { addTransaction , catergories } = useContext(GlobalContext);

    const handleShow = (e) => {
        e.preventDefault();
        setShow(!show);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        const date = new Date();
        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text,
            category,
            amount: (isIncome) ? +amount : -amount,
            date: date.toLocaleString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: 'numeric',
                minute: '2-digit'
            })
        }
        addTransaction(newTransaction);
        setText('');
        setAmount('');
        setCategory('');
        setShow(false);
    }

    const handleCategories = (e) =>{
        let categoryName = e.target.value;
        (!category.includes(categoryName)) ? setCategory([categoryName,...category]) : category.filter(item => item !== categoryName) 
    }
    

    return (
        <>  
            <div className={show ? 'show form-wrap' : 'form-wrap'}>
                <p className='close' onClick={handleShow}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"></path></svg>
                </p>
                    <h4 className='title-2 '>Add new transaction</h4>
                <form onSubmit={onSubmit} className='mt-20 form'>
                    <div className='form-control'>
                        <label htmlFor='text'>Text</label>
                        <input 
                            type='text' 
                            value={text} 
                            onChange={(e) => setText(e.target.value)} 
                            placeholder='Enter text...' 
                            required
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='amount' >Amount </label >
                        <input 
                            type='number' 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)} 
                            placeholder='Enter amount...' 
                            required
                            min='1'
                        />
                    </div>
                    <div className='form-control checkbox d-flex align-baseline'>
                        <input 
                            type='checkbox' 
                            id='income-expense' 
                            name='income-expense' 
                            value='income' 
                            onClick={(e) => setIsincome(!isIncome)}
                        />
                        <label htmlFor='income-expense'>Add as Income</label>
                    </div>
                    <div className='categories-list'>
                        {
                            catergories.map((item,i) => {
                                return  <div key={i}>
                                            <input 
                                                type='checkbox' 
                                                className='item' 
                                                value={item}
                                                id={'cat'+i}
                                                onChange={(e) => handleCategories(e)}
                                            />
                                            <label htmlFor={'cat'+i}>{item}</label>
                                        </div>
                            })
                        }
                    </div>
                    <button className='btn'>Add transaction</button>
                </form>   
            </div>
            <div className='add-transcation' onClick={handleShow}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path  fill='#0b69ff' d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/></svg>
            </div>
        </>
    )
}
