import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';
import ContactForm from './ContactForm';
import {ContactList} from './ContactList';


class App extends Component {
    state = {
        contacts: [
            {
                "id": 1,
                "name": "Alysia D'Hooge",
                "gender": "Female",
                "email": "adhooge0@wikipedia.org",
                "phone": "1571022046",
                "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/1.jpg"
            }, {
                "id": 2,
                "name": "Ruby Tothe",
                "gender": "Male",
                "email": "rtothe1@usa.gov",
                "phone": "1983800201",
                "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/2.jpg"
            }, {
                "id": 3,
                "name": "Reinald Tace",
                "gender": "Male",
                "email": "rtace2@stanford.edu",
                "phone": "7704172788",
                "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/men/3.jpg"
            }, {
                "id": 4,
                "name": "Phoebe Kingsnod",
                "gender": "Female",
                "email": "pkingsnod3@yellowbook.com",
                "phone": "8137639930",
                "picture": "http://vinod.co/kvinod.com/old_ci/randomdata/images/women/4.jpg"
            }
        ]
    }

    addContact = (contact) => {
        let {contacts} = this.state;
        let highestId = Math.max.apply(Math, contacts.map(c => c.id));
        contact.id = highestId + 1;
        contacts.unshift(contact);

        this.setState({contacts});
    }

    deleteContact = (id) => {
        let {contacts} = this.state;
        let highestId = Math.max.apply(Math, this.state.contacts.map(c => c.id));
        console.log(highestId);
        let index = contacts.findIndex(c => c.id === id);
        contacts.splice(index, 1);
        this.setState({contacts});
    }
    render() {
        return (

            <div className="container">
                <h1 className="alert alert-info">React Address Book V 1.0</h1>
                <div className="row">
                    <div className="col">
                        <ContactForm addContact={
                            this.addContact
                        }/>
                    </div>
                    <div className="col">
                        <ContactList contacts={
                                this.state.contacts
                            }
                            deleteContact={
                                this.deleteContact
                            }/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
ReactDOM.render (
    <App/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
