export default (state, action) => {
    switch(action.type) {
      case 'DELETE_TRANSACTION':
        return {
          ...state,
          transactions: {
            catergories:[...state.transactions.catergories],
            data: state.transactions.data.filter(transaction => transaction.id !== action.payload)
          }
        }
        case 'ADD_TRANSACTION':
          return {
            ...state,
            transactions: {
              catergories:[...state.transactions.catergories],
              data:[action.payload, ...state.transactions.data],
            },
          }
          case 'ADD_SHEET':
            return {
              ...state,
              transactions: {
                catergories:[],
                data:[]
              },
              allSheets: [action.payload,...state.allSheets],
              activeSheet: action.payload
            }
            case 'CHANGE_SHEET':
              return {
                ...state,
                transactions: JSON.parse(localStorage.getItem(action.payload)),
                activeSheet: action.payload,
              }

            case 'ADD_CATEGORY':
              return {
                ...state,
                transactions: {
                  catergories:[action.payload, ...state.transactions.catergories],
                  data:[...state.transactions.data],
                },
            }
          
          default:
        return state;
    }
  }
