import axios from "axios"
export function allContacts(){
    // data simulation

    return {
        type: 'ALL_CONTACTS',
        payload: axios.get("https://api.backendless.com/EC0F0496-779D-BCED-FFA8-17CB7062E000/41648582-4F7A-D3AD-FF18-D478F54BFF00/data/arcademy_bootcamp_2")
    }
}
export function getContacts(){
    

    return {
        type: 'GET_CONTACT',
        payload: axios.get("https://api.backendless.com/EC0F0496-779D-BCED-FFA8-17CB7062E000/41648582-4F7A-D3AD-FF18-D478F54BFF00/data/arcademy_bootcamp_2")
    }
}

export function deleteContacts(id){

    return {
        type: 'DELETE_CONTACT',
        payload: axios.delete(`https://api.backendless.com/EC0F0496-779D-BCED-FFA8-17CB7062E000/41648582-4F7A-D3AD-FF18-D478F54BFF00/data/arcademy_bootcamp_2/${id}`)
    }
}

export function postContacts(data){

    return {
        type: 'POST_CONTACT',
        payload: axios.delete(`https://api.backendless.com/EC0F0496-779D-BCED-FFA8-17CB7062E000/41648582-4F7A-D3AD-FF18-D478F54BFF00/data/arcademy_bootcamp_2/` , data)
    }
}

export function putContacts(id,data){
    return {
        type: 'PUT_CONTACT',
        payload: axios.delete(`https://api.backendless.com/EC0F0496-779D-BCED-FFA8-17CB7062E000/41648582-4F7A-D3AD-FF18-D478F54BFF00/data/arcademy_bootcamp_2/${id}` , data)
    }
}