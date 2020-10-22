import { ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACT, GET_CONTACT_DETAIL } from "../actions/types";


export default  (state = {contacts:[]}, action) => {
    switch(action.type){
        case ADD_CONTACT:
           { let contacts = [...state.contacts];
            let newId = 1;
            if(contacts.length>0){
                newId = Math.max.apply(Math,contacts.map(c=> c.id))+1;
            }
            console.log('reducer data ',action.data);
            //action.data.id = newId;
            contacts.push(action.data);
            console.log('in curly ',{...state,contacts});
           // console.log('in square ', [...state,contacts])
            return {...state,contacts};}
        case DELETE_CONTACT:
            {let contacts = [...state.contacts];
            let index = contacts.findIndex(c => c.id===action.data);
            if(index!==-1){
                contacts.splice(index,1);
            }
            return {...state,contacts};}
        case FETCH_CONTACT:
            return {...state,contacts:action.data};
            case GET_CONTACT_DETAIL:
                return {...state, contact:action.data};
        default:
            return state;
    }

}