import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import {createStore} from 'redux';


const initialState = ['virender', 'satyam'];

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_NAME':
            return [
                ...state,
                action.data
            ];
        case 'DELETE_NAME':
            let names = [...state];
            names.splice(action.data, 1);
            return names;
        default:
            return state;
    }
}
const store = createStore(reducer);

window['store']=store;

const submitHanlder = ( evt) => {
    evt.preventDefault();
    let name = document.getElementById('name').value;
    const action = {type:'ADD_NAME',data:name};
    store.dispatch(action);
    document.getElementById('name').value='';
    document.getElementById('name').focus()

}

document.getElementById('frm').onsubmit = submitHanlder;

window['deleteName'] = (id) => {
    let action = {type:'DELETE_NAME',data:id};
    store.dispatch(action);


}

const updateList = () => {
    let names = store.getState();
    let list = names.map((val,index)=> '<li class="list-group-item" >'+
    '<button class ="btn btn-danger" onClick="deleteName('
    +index+')">&times;</button>'
    +val+'</li>');
    console.log(list);
    let listItems = list.join('');
    console.log(listItems);
    document.getElementById('nameList').innerHTML = listItems;

}

updateList();
store.subscribe(updateList);
