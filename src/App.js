import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbari from './components/Navbar.js';
import Productlist from './components/Productlist.js';
import Default from "./components/Default.js";
import Details from "./components/Details.js";
import Card from "./components/Cart";
import Contact from "./components/Contact.js";
import Photoslider from "./components/Photoslider.js";
import Modal from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>

      <Navbari></Navbari>
    
      <Switch>;
        <Route exact path="/" component={Photoslider}></Route>
        <Route exact path='/' component={Productlist}></Route>
        <Route path='/details' component={Details}></Route>
        <Route path='/card' component={Card}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Footer></Footer>
      <Modal></Modal>
      

      

    </React.Fragment>

  
  );
}

export default App;
