import React, {Component} from 'react';
import {Table, Button} from 'react-bootstrap';
import './Solders.css';
import AddFormulaire from '../AddFormulaire/AddFormulaire.js';

class Solders extends Component {
  constructor(props){
    super(props);
    this.state = {
      users:[],
      active: false
    }
    this.activeForm = this.activeForm.bind(this);
  }


  componentDidMount(){
    fetch('http://localhost:3001/api/solders')
      .then(res => res.json())
      .then(users => this.setState({users}))
  }

  activeForm(e){
    this.setState({
      active: true
    });
    e.preventDefault();
  }

  render(){
    return(
      <div>
      {this.state.active==true ?
        <AddFormulaire/>
        :
        <div></div>
      }
      <Button onClick={this.activeForm} className='add' bsStyle="primary">Ajouter un vendeur</Button>
      <h1>Liste des vendeurs</h1>
      <Table responsive>
        <thead>
          <tr>
            <th></th>
            <th>Nom</th>
            <th>Adresse</th>
            <th>description</th>
            <th>{"Liste d'articles"}</th>
          </tr>
        </thead>
        <tbody>
        {this.state.users.map(user =>
          <tr key={user._id}>
            <td><img src={user.picture} alt={user.name}/></td>
            <td>{user.name}</td>
            <td>{user.adress}</td>
            <td>{user.description}</td>
            <td></td>
          </tr>
        )}
        </tbody>
      </Table>
    </div>
    )
  }
}

export default Solders;
