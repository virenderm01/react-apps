import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import * as serviceWorker from './serviceWorker';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/root-reducer';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import ContactDetails from './ContactDetails';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const Home = (props) => (
    <div>
        <h3>React Address Book</h3>
        <hr />
        <p>Powered by &copy;React</p>
    </div>
)

class App extends Component {
    state = {
        
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
            <Provider store={store}>
                <Router>
            <div className="container">
                <h1 className="alert alert-info">React Address Book V 1.0</h1>
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item"><Link to = "/" >Home</Link></li>
                            <li className="list-group-item"><Link to = "/add-contact" >Add Contact</Link></li>
                            <li className="list-group-item"><Link to = "/view-all-contact" >All Contacts</Link></li>
                        </ul>
                       
                    </div>
                    <div className="col">
                    <Route exact component = {Home} path = "/"  />
                    <Route component = {ContactForm} path = "/add-contact"  />

                        <Route component = {ContactList} path = "/view-all-contact"  />
                        <Route component = {ContactDetails} path = "/view-contact/:id"  />
                    </div>
                </div>
            </div>
            </Router>
            </Provider>
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
