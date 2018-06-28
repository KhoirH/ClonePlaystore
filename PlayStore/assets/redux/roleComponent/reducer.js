import {createStore } from 'redux'
import { Switch } from 'native-base';
initialState = {
    header : 1, 
    tabActive : 1,
    drawerActive : 3
};

function roleComponents (state = initialState  , action){
    switch(action.type){
        case "CHANGE_HEADER":
            return {...state , header: action.header}
            break; 
        case "CHANGE_DRAWWER":
            return {...state , header: action.drawer}
            break;
        case "CHANGE_TAB":
            return {...state , header: action.tab} 
            default:
    }
}

export default roleComponents;