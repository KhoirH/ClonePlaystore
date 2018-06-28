const initialState = {
    results: [],
    isLoading : false ,
    get : {},
    actionDelete : false,
    actionPut : false,
    actionPost :false
}
  
const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ALL_CONTACTS_PENDDING':
            return {...state, isLoading: true, results: action.payload , error:false}
        case 'ALL_CONTACTS_FULFILLED':
            return {...state,  isLoading: false,results: action.payload , error:false}

        case 'GET_CONTACT_PENDDING':
            return {...state,isLoading: true , get: action.payload , error:false}
        case 'GET_CONTACT_FULFILLED':
            return {...state, isLoading: false,get: action.payload , error:false}

        case 'POST_CONTACT_PENDDING':
            return {...state,isLoading: true ,  actionPost : false , error:false}
        case 'POST_CONTACT_FULFILLED':
            return {...state, isLoading: false , actionPost : true , error:false}
        case 'POST_CONTACT_REJECTED':
            return {...state, isLoading: false , actionPost : true , error:true}


        case 'DELETE_CONTACT_PENDDING':
            return {...state,isLoading: true , actionDelete : false , error:false}
        case 'DELETE_CONTACT_FULFILLED':
            return {...state, isLoading: false ,actionDelete : true , error:false}

        case 'PUT_CONTACT_PENDDING':
            return {...state,isLoading: true , actionPut : false , error:false}
        case 'PUT_CONTACT_FULFILLED':
            return {...state, isLoading: false ,actionPut : true , error:false}
        case 'PUT_CONTACT_REJECTED':
            return {...state, isLoading: false ,actionPut : true , error: true}
        
        default:
            return state
    }
}

export default contactsReducer