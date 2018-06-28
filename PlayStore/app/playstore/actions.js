import axios from "axios"
export function allItem(){
    return {
        type : "ALL_ITEM",
        payload : axios.get(`http://192.168.42.125:8000/items`)
    }
}

export function singleAccount(id){
    // data simulation
    return {
        type: 'GET_ACCOUNT',
        payload: axios.get(`http://192.168.42.125:8000/users/${id}`)
    }
}

