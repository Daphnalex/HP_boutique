import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header.js';
import NavBar from './components/NavBar/NavBar.js';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import {Grid,Row,Col} from 'react-bootstrap';
import Boutique from './components/Boutique/Boutique.js';
import Solders from './components/Solders/Solders.js';
import Articles from './components/Articles/Articles.js';
import Panier from './components/Panier/Panier.js';
import Login from './components/Login/Login.js';

class App extends Component {

  render() {

    return (
      <Grid>
        <Row className="App">
          <NavBar/>
          <Header/>
          <Row>
            <Col md={1}>
            </Col>
            <Col md={10} className='Content'>
              <BrowserRouter>
                <div>
                  <Route exact path='/' component={Boutique}/>
                  <Route path='/vendeurs' component={Solders}/>
                  <Route path='/articles' component={Articles}/>
                  <Route path='/panier' component={Panier}/>
                  <Route path='/login' component={Login}/>
                </div>
              </BrowserRouter>
            </Col>
          </Row>
        </Row>
      </Grid>
    );
  }
}

export default App;
