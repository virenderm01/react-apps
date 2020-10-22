import { FETCH_CONTACT, ADD_CONTACT, DELETE_CONTACT,GET_CONTACT_DETAIL } from "./types"

const url = "http://localhost:4000/contacts/"

export const fetchContacts = () => async (dispatch) => {
    let resp = await fetch(url);
    let contacts = await resp.json();   
    let action = {
            type : FETCH_CONTACT,
            data:  contacts
        }
        dispatch(action);
    }

export const addContact = (contact) => async (dispatch) => {
    console.log('action ',contact);
    let resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type':'appllication/json'
        }
    });
    let newContact = await resp.json();
    let action = {
        type: ADD_CONTACT,
        data: newContact
    }
    dispatch(action);
}

export const deleteContact = (id) => async (dispatch) => {
    await fetch(url+id, {method:'DELETE'})
    let action = {
        type: DELETE_CONTACT,
        data: id
    }
    dispatch(action);
}
export const fetchContactById = (id) => async (dispatch) => {
    let resp = await fetch(url+id);
    let contactDetail = await resp.json();
    let action = {
        type: GET_CONTACT_DETAIL,
        data: contactDetail
    }
    dispatch(action);
}