import React,{useContext,useState} from 'react'
import { GlobalContext } from '../Context/GlobalState'
export const Sheets = () => {
    const { addSheet, sheetName, changeSheet, activeSheet} = useContext(GlobalContext);
    const [sheet, setSheet] = useState('')
    const addNewSheet = (e) => {
        if(e.which === 13 && !sheetName.includes(e.target.value)){
            addSheet(e.target.value)
            setSheet('')
        }
    }
    
    return (
        <div className='sheets-wrap'>
            <p className='title-2'>Sheets</p>
            <ul className='list-wrap'>
                {
                    sheetName.map((item,i) =>{
                        return <li className={item === activeSheet ? 'list-items active':'list-items'}  key={i} onClick={() => changeSheet(item)} >{item}</li>
                    })
                }
            </ul>
            <input 
                type='text'
                className='add-new' 
                onKeyUp={addNewSheet} 
                value={sheet}
                onChange={(e) => setSheet(e.target.value)} 
                placeholder='Add new' 
                required
                min='1'
            />
        </div>
    )
}
