import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Structure/Header';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import './index.css';
import AddUser from './User/AddUser';
import Viewuser from './User/Viewuser';
import EditUser from './User/EditUser';


const App = () =>{
return(
  <>
  <Router>
  <Header />
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/adduser" component={AddUser} />
    <Route exact path="/user/:id" component={Viewuser} />
    <Route exact path="/edit/:id" component={EditUser} />

  </Switch>
  </Router>
  </>
)
}

export default App;