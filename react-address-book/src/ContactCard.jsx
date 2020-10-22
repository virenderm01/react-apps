import React from 'react';

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
                    {
                    contact.name
                } </h5>
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
                    onClick={
                        () => {
                            deleteContact(contact.id);
                        }
                }>x</button>
            </div>
        </div>
    </div>


);

export default ContactCard;
