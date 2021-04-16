import React, { createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';

const localData = JSON.parse(localStorage.getItem('sheet 1'));
const initialState = {
  transactions: (localData && localData.length > 0) ? JSON.parse(localStorage.getItem('sheet 1')) : {
    catergories :[],
    data:[]
  },
  allSheets: localData ? Object.keys(localStorage) : ['sheet 1'],
  activeSheet : 'sheet 1',
} 
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state,dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    localStorage.setItem(state.activeSheet,JSON.stringify(state.transactions))
  }, [state])
  function deleteTransaction( id ){
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction( id ){
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: id
    })
  }

  function addSheet( name ){
    dispatch({
      type: 'ADD_SHEET',
      payload: name
    })
  }

  function addCategory( name ){
    dispatch({
      type: 'ADD_CATEGORY',
      payload: name
    })
  }

  function changeSheet( name ){
    dispatch({
      type: 'CHANGE_SHEET',
      payload: name
    })
  }

  return (<GlobalContext.Provider value={{
      transactions: state.transactions.data,
      catergories: state.transactions.catergories,
      sheetName: state.allSheets,
      activeSheet: state.activeSheet,
      deleteTransaction,
      addTransaction,
      addSheet,
      changeSheet,
      addCategory,
  }}>
    {children}
  </GlobalContext.Provider>)
}

