import React from 'react';
import {connect} from 'react-redux';
import { deleteContact } from './actions/contacts-action';
import {Link} from 'react-router-dom';
const ContactCard = ({contact, deleteContact}) => (
    <div className="card"
        style={
            {
                margin: '10px',
                padding: '10px'
            }
    }>
        <div className="row">
            <div className="col-md-4">
                <img className="card-img"
                    src={
                        contact.picture
                    }
                    alt={
                        contact.name
                    }
                    style={
                        {
                            height: '100px',
                            width: '100px',
                            margin: '10px'
                        }
                    }/>
            </div>
            <div className="col-md-7">
                <h5 className="card-title">
                    <Link to={"/view-contact/"+contact.id}>{
                    contact.name
                } </Link></h5>
                <div className="card-text">
                    {
                    contact.email
                }</div>
                <div className="card-text">
                    {
                    contact.phone
                }</div>
            </div>
            <div className="col-md-1">
                <button className="btn btn-link text-danger"
                    onClick = {() => {deleteContact(contact.id);}}>x</button>
            </div>
        </div>
    </div>


);

const actionAsProps = {
   deleteContact

};
export default connect(null, actionAsProps)(ContactCard);
