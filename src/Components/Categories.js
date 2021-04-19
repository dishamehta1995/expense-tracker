import React,{useContext,useState} from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const Categories = () => {

    const { addCategory,catergories} = useContext(GlobalContext);

    const [cat, setCat] = useState('')
    const addNewCat = (e) => {
        if(e.which === 13 && !catergories.includes(e.target.value)){
            addCategory(e.target.value)
            setCat('')
        }
    }

    return (
        <div className='sheets-wrap'>
            <p className='title-2'>Categories</p>
            <ul className='list-wrap'>
                {
                    catergories.map((item,i) => {
                        return <li className='list-items' key={i}>{item} </li>
                    })
                }
            </ul>
            <input 
                type='text'
                className='add-new'
                onKeyUp={addNewCat} 
                value={cat}
                onChange={(e) => setCat(e.target.value)} 
                placeholder='Add new' 
                required
                min='1'
            />
        </div>
    )
}
