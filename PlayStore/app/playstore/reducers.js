const initialState = {
    items: [],
    isLoading: true,
    account :{},
}
  
export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_ITEM_PENDING':
            return {...state, isLoading: true }
        case 'ALL_ITEM_FULFILLED':
            return {...state,  isLoading: false,items: action.payload.data }
        default:
            return state
    }
}
export const accountReducer = (state = initialState , action) => {
    switch (action.type) {
        case "GET_ACCOUNT_PENDING":
            return {...state , isLoading : true }
        case "GET_ACCOUNT_FULFILLED":
            return {...state , isLoading : false ,account : action.payload.data}
    default :
        return state
    }
}
