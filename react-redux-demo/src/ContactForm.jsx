import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addContact} from './actions/contacts-action';


class ContactForm extends Component {

    state = {
        name: '',
        email: '',
        phone: '',
        picture: '',
        formErrors: {
            name: 'Name is required',
            email: 'Email is required',
            phone: 'Phone is required'
        },
        errorMessages: ''
    }
    tfHandler = ({target}) => {
        let {name, value} = target;
        let {formErrors} = this.state;

        switch (name) {
            case "name":
                if (!value && value.length === 0) {
                    formErrors.name = "Name is required";
                } else if (value.length < 3) {
                    formErrors.name = 'Name must be at least 3 letters';
                } else {
                    formErrors.name = '';
                }
                break;
            case "email":
                if (!value && value.length === 0) {
                    formErrors.email = "Email is required";
                } else if (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    formErrors.email = 'Not a valid email id';
                } else {
                    formErrors.email = '';
                }
                break;
            case 'phone':
                if (!value || value.length === 0) {
                    formErrors.phone = 'Email is required';
                } else if (!value.match(/^\d{10,12}$/)) {
                    formErrors.phone = 'Not a valid phone';
                } else {
                    formErrors.phone = '';
                }
                break;
            default:
                break;
        }

        this.setState({[name]: value, formErrors});
    }

    validForm = (formErrors) => {
        let valid = true;
        Object.values(formErrors).map(err => (valid = valid && err.length === 0));
        return valid;
    }
    submitHandler = (evt) => {
        evt.preventDefault();
        let {formErrors} = this.state;
        let errors = Object.values(formErrors).map((value, index) => value.length === 0 ? null : <li key={index}>
            {value}</li>);
        this.setState({errorMessages: errors});
        if (this.validForm(formErrors)) {
            alert("all info correct");
            let {name, email, phone, picture} = this.state;
            let contact = {
                name,
                email,
                phone,
                picture
            };
            console.log(contact);
            this.props.addContact(contact);
            this.props.history.push("/view-all-contacts")
            this.setState({
                name: '',
                email: '',
                phone: '',
                picture: '',
                formErrors: {
                    name: 'Name is required',
                    email: 'Email is required',
                    phone: 'Phone is required'
                },
                errorMessages: ''
            })
        }

    }


    render() {
        return (
            <div>
                <h3>Add New Contact</h3>
                <form className='form'
                    onSubmit={
                        this.submitHandler
                }>
                    <div className="form-group-row">
                        <div className="form-label col-md-4">Name</div>
                        <div className=" col-md-8">
                            <input value ={this.state.name}
                                onChange={
                                    this.tfHandler
                                }
                                name="name"
                                type="text"
                                className="form-control"/>
                        </div>
                    </div>

                    <div className="form-group-row">
                        <div className="form-label col-md-4">Email</div>
                        <div className=" col-md-8">
                            <input value ={this.state.email}
                                onChange={
                                    this.tfHandler
                                }
                                name="email"
                                type="text"
                                className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-label col-md-4">Phone</div>
                        <div className=" col-md-8">
                            <input value ={this.state.phone}
                                onChange={
                                    this.tfHandler
                                }
                                name="phone"
                                type="text"
                                className="form-control"/>
                        </div>
                    </div>
                    <div className="form-group-row">
                        <div className="form-label col-md-4">Picture</div>
                        <div className=" col-md-8">
                            <input value ={this.state.picture}
                                onChange={
                                    this.tfHandler
                                }
                                name="picture"
                                type="text"
                                className="form-control"/>
                        </div>
                    </div>
                    <button className="btn btn-primary">Add Contact</button>
                </form>
                <ul> {
                    this.state.errorMessages
                } </ul>
            </div>


        );
    }
}

export default connect(null, {addContact})(ContactForm);
