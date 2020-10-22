import React, { Component } from 'react';
import {fetchContactById} from './actions/contacts-action';
import {connect} from 'react-redux';
class ContactDetails extends Component {

    componentDidMount(){
        let {id} = this.props.match.params;
        this.props.fetchContactById(id);
    }
    
    render() { 
        let {contact} = this.props;
        if(!contact){
            contact = {};
        }
        return ( 
            <div>
                <h3>Contact Details </h3>
                <div className="row">
                    <div className="col-md-4">
                    <img src={contact.picture} alt={contact.name} className="img img-thumbnail" style = {{height:'200px'}}/>

                    </div>
                    <div className="col-md-8">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{contact.name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{contact.email}</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>{contact.phone}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
         );
    }
}
let stateAsProps = (reducers) => (
    {
        contact:reducers.contactsReducer.contact
    }
)
let actionAsProps =  {
    fetchContactById
}
export default connect(stateAsProps, actionAsProps)(ContactDetails);